var K = wx.$S;
function sxt2im(vk39oz) {
  this['options'] = vk39oz || { 'locator': {} };
}function su$r4ea(jq1ps, r3$eu, zc9k) {
  function er43u$(d5phs) {
    var jyqsp = jq1ps[d5phs];!jyqsp && dayh && (jyqsp = 0x2 == jq1ps['length'] ? function (k0w9_) {
      jq1ps(d5phs, k0w9_);
    } : jq1ps), re$a[d5phs] = jyqsp && function (_ckw9) {
      jyqsp('[xmldom ' + d5phs + ']\t' + _ckw9 + s_2xnim(zc9k));
    } || function () {};
  }if (!jq1ps) {
    if (r3$eu instanceof sw_x0) return r3$eu;jq1ps = r3$eu;
  }var re$a = {},
      dayh = jq1ps instanceof Function;return zc9k = zc9k || {}, er43u$('warning'), er43u$('error'), er43u$('fatalError'), re$a;
}function sw_x0() {
  this['cdata'] = !0x1;
}function ssjp1g(zvu3o, u$ed) {
  u$ed['lineNumber'] = zvu3o['lineNumber'], u$ed['columnNumber'] = zvu3o['columnNumber'];
}function s_2xnim($d) {
  return $d ? '\x0a@' + ($d['systemId'] || '') + '#[line:' + $d['lineNumber'] + ',col:' + $d['columnNumber'] + ']' : void 0x0;
}function sk09zwc(uozrv, yshqp, zk0c) {
  return 'string' == typeof uozrv ? uozrv['substr'](yshqp, zk0c) : uozrv['length'] >= yshqp + zk0c || yshqp ? new java['lang']['String'](uozrv, yshqp, zk0c) + '' : uozrv;
}function s$hyad5(gq18bj, oure4) {
  gq18bj['currentElement'] ? gq18bj['currentElement']['appendChild'](oure4) : gq18bj['doc']['appendChild'](oure4);
}sxt2im['prototype']['parseFromString'] = function (w0czk9, wzk9c) {
  var gjpys = this['options'],
      sg1pj = new si_xcm2(),
      d5a$4 = gjpys['domBuilder'] || new sw_x0(),
      uvore3 = gjpys['errorHandler'],
      eu4o = gjpys['locator'],
      r3kzov = gjpys['xmlns'] || {},
      n7m = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return eu4o && d5a$4['setDocumentLocator'](eu4o), sg1pj['errorHandler'] = su$r4ea(uvore3, d5a$4, eu4o), sg1pj['domBuilder'] = gjpys['domBuilder'] || d5a$4, /\/x?html?$/['test'](wzk9c) && (n7m['nbsp'] = '\u00a0', n7m['copy'] = '©', r3kzov[''] = 'http://www.w3.org/1999/xhtml'), r3kzov['xml'] = r3kzov['xml'] || 'http://www.w3.org/XML/1998/namespace', w0czk9 ? sg1pj['parse'](w0czk9, r3kzov, n7m) : sg1pj['errorHandler']['error']('invalid doc source'), d5a$4['doc'];
}, sw_x0['prototype'] = { 'startDocument': function () {
    this['doc'] = new sc2_mx()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (psqy5h, c9kz0, yspjq, itmn2) {
    var a54e = this['doc'],
        qgjb = a54e['createElementNS'](psqy5h, yspjq || c9kz0),
        _in2xm = itmn2['length'];s$hyad5(this, qgjb), this['currentElement'] = qgjb, this['locator'] && ssjp1g(this['locator'], qgjb);for (var f1b68l = 0x0; _in2xm > f1b68l; f1b68l++) {
      var psqy5h = itmn2['getURI'](f1b68l),
          u3ore4 = itmn2['getValue'](f1b68l),
          yspjq = itmn2['getQName'](f1b68l),
          hsda = a54e['createAttributeNS'](psqy5h, yspjq);this['locator'] && ssjp1g(itmn2['getLocator'](f1b68l), hsda), hsda['value'] = hsda['nodeValue'] = u3ore4, qgjb['setAttributeNode'](hsda);
    }
  }, 'endElement': function () {
    {
      var jgp1q8 = this['currentElement'];jgp1q8['tagName'];
    }this['currentElement'] = jgp1q8['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (dys5p, ay5h) {
    var d5e$a = this['doc']['createProcessingInstruction'](dys5p, ay5h);this['locator'] && ssjp1g(this['locator'], d5e$a), s$hyad5(this, d5e$a);
  }, 'ignorableWhitespace': function () {}, 'characters': function (e4rou3) {
    if (e4rou3 = sk09zwc['apply'](this, arguments)) {
      if (this['cdata']) var d$45ha = this['doc']['createCDATASection'](e4rou3);else var d$45ha = this['doc']['createTextNode'](e4rou3);this['currentElement'] ? this['currentElement']['appendChild'](d$45ha) : /^\s*$/['test'](e4rou3) && this['doc']['appendChild'](d$45ha), this['locator'] && ssjp1g(this['locator'], d$45ha);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (u4d$a) {
    (this['locator'] = u4d$a) && (u4d$a['lineNumber'] = 0x0);
  }, 'comment': function (uro3ev) {
    uro3ev = sk09zwc['apply'](this, arguments);var pjgsq1 = this['doc']['createComment'](uro3ev);this['locator'] && ssjp1g(this['locator'], pjgsq1), s$hyad5(this, pjgsq1);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function ($rea, yhdps5, w9ozv) {
    var a$eu = this['doc']['implementation'];if (a$eu && a$eu['createDocumentType']) {
      var wc_k9 = a$eu['createDocumentType']($rea, yhdps5, w9ozv);this['locator'] && ssjp1g(this['locator'], wc_k9), s$hyad5(this, wc_k9);
    }
  }, 'warning': function (e4$aru) {
    console['warn']('[xmldom warning]\t' + e4$aru, s_2xnim(this['locator']));
  }, 'error': function (g16b8j) {
    console['error']('[xmldom error]\t' + g16b8j, s_2xnim(this['locator']));
  }, 'fatalError': function (z0vw9k) {
    throw console['error']('[xmldom fatalError]\t' + z0vw9k, s_2xnim(this['locator'])), z0vw9k;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_c90kw) {
  sw_x0['prototype'][_c90kw] = function () {
    return null;
  };
});var si_xcm2 = require('./sS12ss')['XMLReader'],
    sc2_mx = exports['DOMImplementation'] = require('./ssDOss')['DOMImplementation'];exports['XMLSerializer'] = require('./ssDOss')['XMLSerializer'], exports['DOMParser'] = sxt2im;