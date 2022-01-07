var K = wx.$S;
function sjsqpg(i0xcw_) {
  this['options'] = i0xcw_ || { 'locator': {} };
}function ss1jq(u4r$a, or4u3, jpq8g1) {
  function okv39z(qbgj) {
    var r34ueo = u4r$a[qbgj];!r34ueo && t27nxm && (r34ueo = 0x2 == u4r$a['length'] ? function (qg8j) {
      u4r$a(qbgj, qg8j);
    } : u4r$a), u3orve[qbgj] = r34ueo && function (orv3kz) {
      r34ueo('[xmldom ' + qbgj + ']\t' + orv3kz + sxt2mi(jpq8g1));
    } || function () {};
  }if (!u4r$a) {
    if (or4u3 instanceof su$r4) return or4u3;u4r$a = or4u3;
  }var u3orve = {},
      t27nxm = u4r$a instanceof Function;return jpq8g1 = jpq8g1 || {}, okv39z('warning'), okv39z('error'), okv39z('fatalError'), u3orve;
}function su$r4() {
  this['cdata'] = !0x1;
}function skw90zc(xmc, _cx2) {
  _cx2['lineNumber'] = xmc['lineNumber'], _cx2['columnNumber'] = xmc['columnNumber'];
}function sxt2mi(aued$4) {
  return aued$4 ? '\x0a@' + (aued$4['systemId'] || '') + '#[line:' + aued$4['lineNumber'] + ',col:' + aued$4['columnNumber'] + ']' : void 0x0;
}function szk3ro(cim_x2, zvkwo9, pqhgys) {
  return 'string' == typeof cim_x2 ? cim_x2['substr'](zvkwo9, pqhgys) : cim_x2['length'] >= zvkwo9 + pqhgys || zvkwo9 ? new java['lang']['String'](cim_x2, zvkwo9, pqhgys) + '' : cim_x2;
}function svo3zk(r3uvz, r3ovz) {
  r3uvz['currentElement'] ? r3uvz['currentElement']['appendChild'](r3ovz) : r3uvz['doc']['appendChild'](r3ovz);
}sjsqpg['prototype']['parseFromString'] = function ($ae4ud, k9w0_) {
  var ue34r = this['options'],
      psgy = new skroz3v(),
      g8pq = ue34r['domBuilder'] || new su$r4(),
      p8jqg = ue34r['errorHandler'],
      cimx2_ = ue34r['locator'],
      x0_wic = ue34r['xmlns'] || {},
      lj8 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return cimx2_ && g8pq['setDocumentLocator'](cimx2_), psgy['errorHandler'] = ss1jq(p8jqg, g8pq, cimx2_), psgy['domBuilder'] = ue34r['domBuilder'] || g8pq, /\/x?html?$/['test'](k9w0_) && (lj8['nbsp'] = '\u00a0', lj8['copy'] = '©', x0_wic[''] = 'http://www.w3.org/1999/xhtml'), x0_wic['xml'] = x0_wic['xml'] || 'http://www.w3.org/XML/1998/namespace', $ae4ud ? psgy['parse']($ae4ud, x0_wic, lj8) : psgy['errorHandler']['error']('invalid doc source'), g8pq['doc'];
}, su$r4['prototype'] = { 'startDocument': function () {
    this['doc'] = new sozvur()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (b168lf, v3zro, u4e$ar, _90wci) {
    var fb68l = this['doc'],
        ci2x = fb68l['createElementNS'](b168lf, u4e$ar || v3zro),
        q1jg8b = _90wci['length'];svo3zk(this, ci2x), this['currentElement'] = ci2x, this['locator'] && skw90zc(this['locator'], ci2x);for (var dhsay5 = 0x0; q1jg8b > dhsay5; dhsay5++) {
      var b168lf = _90wci['getURI'](dhsay5),
          ayh$d = _90wci['getValue'](dhsay5),
          u4e$ar = _90wci['getQName'](dhsay5),
          y5ah$ = fb68l['createAttributeNS'](b168lf, u4e$ar);this['locator'] && skw90zc(_90wci['getLocator'](dhsay5), y5ah$), y5ah$['value'] = y5ah$['nodeValue'] = ayh$d, ci2x['setAttributeNode'](y5ah$);
    }
  }, 'endElement': function () {
    {
      var yqh = this['currentElement'];yqh['tagName'];
    }this['currentElement'] = yqh['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (dhs5ya, o3e4) {
    var e3vo = this['doc']['createProcessingInstruction'](dhs5ya, o3e4);this['locator'] && skw90zc(this['locator'], e3vo), svo3zk(this, e3vo);
  }, 'ignorableWhitespace': function () {}, 'characters': function (wzk0v9) {
    if (wzk0v9 = szk3ro['apply'](this, arguments)) {
      if (this['cdata']) var cxim_2 = this['doc']['createCDATASection'](wzk0v9);else var cxim_2 = this['doc']['createTextNode'](wzk0v9);this['currentElement'] ? this['currentElement']['appendChild'](cxim_2) : /^\s*$/['test'](wzk0v9) && this['doc']['appendChild'](cxim_2), this['locator'] && skw90zc(this['locator'], cxim_2);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ci2_m) {
    (this['locator'] = ci2_m) && (ci2_m['lineNumber'] = 0x0);
  }, 'comment': function (vk09) {
    vk09 = szk3ro['apply'](this, arguments);var ko9zwv = this['doc']['createComment'](vk09);this['locator'] && skw90zc(this['locator'], ko9zwv), svo3zk(this, ko9zwv);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (qgp8, ae$4ru, a4re$) {
    var f618b = this['doc']['implementation'];if (f618b && f618b['createDocumentType']) {
      var d$45e = f618b['createDocumentType'](qgp8, ae$4ru, a4re$);this['locator'] && skw90zc(this['locator'], d$45e), svo3zk(this, d$45e);
    }
  }, 'warning': function (qysgjp) {
    console['warn']('[xmldom warning]\t' + qysgjp, sxt2mi(this['locator']));
  }, 'error': function (zv9kw) {
    console['error']('[xmldom error]\t' + zv9kw, sxt2mi(this['locator']));
  }, 'fatalError': function (jq8b1) {
    throw console['error']('[xmldom fatalError]\t' + jq8b1, sxt2mi(this['locator'])), jq8b1;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (j1sgp) {
  su$r4['prototype'][j1sgp] = function () {
    return null;
  };
});var skroz3v = require('./sS12ss')['XMLReader'],
    sozvur = exports['DOMImplementation'] = require('./ssDOss')['DOMImplementation'];exports['XMLSerializer'] = require('./ssDOss')['XMLSerializer'], exports['DOMParser'] = sjsqpg;