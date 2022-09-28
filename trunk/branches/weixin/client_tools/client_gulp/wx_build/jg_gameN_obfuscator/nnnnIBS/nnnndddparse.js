var A = wx.$N;
function n_w6$bqa(kxic) {
  this['options'] = kxic || { 'locator': {} };
}function n_r$4qb(w6a$b, _m8jun, svkxi2) {
  function sg1xcv(o3j0e) {
    var xs1g = w6a$b[o3j0e];!xs1g && si2vp && (xs1g = 0x2 == w6a$b['length'] ? function (gc71sx) {
      w6a$b(o3j0e, gc71sx);
    } : w6a$b), sx1gc[o3j0e] = xs1g && function (c5x1g) {
      xs1g('[xmldom ' + o3j0e + ']\t' + c5x1g + n_df8_h(svkxi2));
    } || function () {};
  }if (!w6a$b) {
    if (_m8jun instanceof n_o9yzr) return _m8jun;w6a$b = _m8jun;
  }var sx1gc = {},
      si2vp = w6a$b instanceof Function;return svkxi2 = svkxi2 || {}, sg1xcv('warning'), sg1xcv('error'), sg1xcv('fatalError'), sx1gc;
}function n_o9yzr() {
  this['cdata'] = !0x1;
}function n_gt75(b6a$q, udh_8) {
  udh_8['lineNumber'] = b6a$q['lineNumber'], udh_8['columnNumber'] = b6a$q['columnNumber'];
}function n_df8_h(csvix) {
  return csvix ? '\x0a@' + (csvix['systemId'] || '') + '#[line:' + csvix['lineNumber'] + ',col:' + csvix['columnNumber'] + ']' : void 0x0;
}function n_f8_uhd(n8jum, tfhd8, g1scv) {
  return 'string' == typeof n8jum ? n8jum['substr'](tfhd8, g1scv) : n8jum['length'] >= tfhd8 + g1scv || tfhd8 ? new java['lang']['String'](n8jum, tfhd8, g1scv) + '' : n8jum;
}function n_hun8m_(kcxsvi, r$4b) {
  kcxsvi['currentElement'] ? kcxsvi['currentElement']['appendChild'](r$4b) : kcxsvi['doc']['appendChild'](r$4b);
}n_w6$bqa['prototype']['parseFromString'] = function (gv1c, _mnuh) {
  var ksxciv = this['options'],
      n_0ujm = new n_ksip2(),
      y9qrz = ksxciv['domBuilder'] || new n_o9yzr(),
      eo43y = ksxciv['errorHandler'],
      a6q = ksxciv['locator'],
      r3yzo4 = ksxciv['xmlns'] || {},
      j_u0nm = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return a6q && y9qrz['setDocumentLocator'](a6q), n_0ujm['errorHandler'] = n_r$4qb(eo43y, y9qrz, a6q), n_0ujm['domBuilder'] = ksxciv['domBuilder'] || y9qrz, /\/x?html?$/['test'](_mnuh) && (j_u0nm['nbsp'] = '\u00a0', j_u0nm['copy'] = '©', r3yzo4[''] = 'http://www.w3.org/1999/xhtml'), r3yzo4['xml'] = r3yzo4['xml'] || 'http://www.w3.org/XML/1998/namespace', gv1c ? n_0ujm['parse'](gv1c, r3yzo4, j_u0nm) : n_0ujm['errorHandler']['error']('invalid doc source'), y9qrz['doc'];
}, n_o9yzr['prototype'] = { 'startDocument': function () {
    this['doc'] = new n_le0m()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (kx2ivs, f_8t, _8njm, n0j_um) {
    var c1ksx = this['doc'],
        jn30 = c1ksx['createElementNS'](kx2ivs, _8njm || f_8t),
        j0elmn = n0j_um['length'];n_hun8m_(this, jn30), this['currentElement'] = jn30, this['locator'] && n_gt75(this['locator'], jn30);for (var bw96q = 0x0; j0elmn > bw96q; bw96q++) {
      var kx2ivs = n0j_um['getURI'](bw96q),
          dt75g1 = n0j_um['getValue'](bw96q),
          _8njm = n0j_um['getQName'](bw96q),
          v2xkis = c1ksx['createAttributeNS'](kx2ivs, _8njm);this['locator'] && n_gt75(n0j_um['getLocator'](bw96q), v2xkis), v2xkis['value'] = v2xkis['nodeValue'] = dt75g1, jn30['setAttributeNode'](v2xkis);
    }
  }, 'endElement': function () {
    {
      var sgv1c = this['currentElement'];sgv1c['tagName'];
    }this['currentElement'] = sgv1c['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (_fhd8t, yzro4) {
    var hfdt7 = this['doc']['createProcessingInstruction'](_fhd8t, yzro4);this['locator'] && n_gt75(this['locator'], hfdt7), n_hun8m_(this, hfdt7);
  }, 'ignorableWhitespace': function () {}, 'characters': function (z3oey) {
    if (z3oey = n_f8_uhd['apply'](this, arguments)) {
      if (this['cdata']) var vkcx1s = this['doc']['createCDATASection'](z3oey);else var vkcx1s = this['doc']['createTextNode'](z3oey);this['currentElement'] ? this['currentElement']['appendChild'](vkcx1s) : /^\s*$/['test'](z3oey) && this['doc']['appendChild'](vkcx1s), this['locator'] && n_gt75(this['locator'], vkcx1s);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ezoyl) {
    (this['locator'] = ezoyl) && (ezoyl['lineNumber'] = 0x0);
  }, 'comment': function (ki2vps) {
    ki2vps = n_f8_uhd['apply'](this, arguments);var eol0z3 = this['doc']['createComment'](ki2vps);this['locator'] && n_gt75(this['locator'], eol0z3), n_hun8m_(this, eol0z3);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (nj8, h_8mfu, cg71) {
    var xgsc1v = this['doc']['implementation'];if (xgsc1v && xgsc1v['createDocumentType']) {
      var t7f5dg = xgsc1v['createDocumentType'](nj8, h_8mfu, cg71);this['locator'] && n_gt75(this['locator'], t7f5dg), n_hun8m_(this, t7f5dg);
    }
  }, 'warning': function (zy4o9) {
    console['warn']('[xmldom warning]\t' + zy4o9, n_df8_h(this['locator']));
  }, 'error': function (c51g7x) {
    console['error']('[xmldom error]\t' + c51g7x, n_df8_h(this['locator']));
  }, 'fatalError': function (cxv1ks) {
    throw console['error']('[xmldom fatalError]\t' + cxv1ks, n_df8_h(this['locator'])), cxv1ks;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function ($w9rq) {
  n_o9yzr['prototype'][$w9rq] = function () {
    return null;
  };
});var n_ksip2 = require('./nnnSAX')['XMLReader'],
    n_le0m = exports['DOMImplementation'] = require('./nnnnDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./nnnnDOM')['XMLSerializer'], exports['DOMParser'] = n_w6$bqa;