var M = wx.$T;
function tzf$vd(oxy0) {
  this['options'] = oxy0 || { 'locator': {} };
}function toe7f(jsarbk, abkjrs, d7p$) {
  function xyhm(nrbjg) {
    var fd$zvp = jsarbk[nrbjg];!fd$zvp && t$v9ic && (fd$zvp = 0x2 == jsarbk['length'] ? function (oyeqx0) {
      jsarbk(nrbjg, oyeqx0);
    } : jsarbk), fo7zd[nrbjg] = fd$zvp && function (dpi9$) {
      fd$zvp('[xmldom ' + nrbjg + ']\t' + dpi9$ + th8156(d7p$));
    } || function () {};
  }if (!jsarbk) {
    if (abkjrs instanceof tm_0yh) return abkjrs;jsarbk = abkjrs;
  }var fo7zd = {},
      t$v9ic = jsarbk instanceof Function;return d7p$ = d7p$ || {}, xyhm('warning'), xyhm('error'), xyhm('fatalError'), fo7zd;
}function tm_0yh() {
  this['cdata'] = !0x1;
}function txye0q(rsk, n16835) {
  n16835['lineNumber'] = rsk['lineNumber'], n16835['columnNumber'] = rsk['columnNumber'];
}function th8156(ict924) {
  return ict924 ? '\x0a@' + (ict924['systemId'] || '') + '#[line:' + ict924['lineNumber'] + ',col:' + ict924['columnNumber'] + ']' : void 0x0;
}function tpf$vdz(h_0mxy, lc24i, h_6wm5) {
  return 'string' == typeof h_0mxy ? h_0mxy['substr'](lc24i, h_6wm5) : h_0mxy['length'] >= lc24i + h_6wm5 || lc24i ? new java['lang']['String'](h_0mxy, lc24i, h_6wm5) + '' : h_0mxy;
}function t_my0xh(ragjkb, kusj) {
  ragjkb['currentElement'] ? ragjkb['currentElement']['appendChild'](kusj) : ragjkb['doc']['appendChild'](kusj);
}tzf$vd['prototype']['parseFromString'] = function ($9vc, h165wm) {
  var $iv9dc = this['options'],
      rajbgk = new tmhy_0(),
      rabjg = $iv9dc['domBuilder'] || new tm_0yh(),
      d$fvpz = $iv9dc['errorHandler'],
      pd9vf = $iv9dc['locator'],
      _5hm = $iv9dc['xmlns'] || {},
      z70eo = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return pd9vf && rabjg['setDocumentLocator'](pd9vf), rajbgk['errorHandler'] = toe7f(d$fvpz, rabjg, pd9vf), rajbgk['domBuilder'] = $iv9dc['domBuilder'] || rabjg, /\/x?html?$/['test'](h165wm) && (z70eo['nbsp'] = '\u00a0', z70eo['copy'] = '©', _5hm[''] = 'http://www.w3.org/1999/xhtml'), _5hm['xml'] = _5hm['xml'] || 'http://www.w3.org/XML/1998/namespace', $9vc ? rajbgk['parse']($9vc, _5hm, z70eo) : rajbgk['errorHandler']['error']('invalid doc source'), rabjg['doc'];
}, tm_0yh['prototype'] = { 'startDocument': function () {
    this['doc'] = new tze0o7q()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function ($tc9v, cd9$, icvd, o70eq) {
    var xmq0y = this['doc'],
        yq_x0e = xmq0y['createElementNS']($tc9v, icvd || cd9$),
        mwhy = o70eq['length'];t_my0xh(this, yq_x0e), this['currentElement'] = yq_x0e, this['locator'] && txye0q(this['locator'], yq_x0e);for (var eqoxy0 = 0x0; mwhy > eqoxy0; eqoxy0++) {
      var $tc9v = o70eq['getURI'](eqoxy0),
          eyxq_0 = o70eq['getValue'](eqoxy0),
          icvd = o70eq['getQName'](eqoxy0),
          vic2 = xmq0y['createAttributeNS']($tc9v, icvd);this['locator'] && txye0q(o70eq['getLocator'](eqoxy0), vic2), vic2['value'] = vic2['nodeValue'] = eyxq_0, yq_x0e['setAttributeNode'](vic2);
    }
  }, 'endElement': function () {
    {
      var dzv$fp = this['currentElement'];dzv$fp['tagName'];
    }this['currentElement'] = dzv$fp['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (qoz07e, tivc29) {
    var bkarg = this['doc']['createProcessingInstruction'](qoz07e, tivc29);this['locator'] && txye0q(this['locator'], bkarg), t_my0xh(this, bkarg);
  }, 'ignorableWhitespace': function () {}, 'characters': function (dc9$vi) {
    if (dc9$vi = tpf$vdz['apply'](this, arguments)) {
      if (this['cdata']) var wh_y = this['doc']['createCDATASection'](dc9$vi);else var wh_y = this['doc']['createTextNode'](dc9$vi);this['currentElement'] ? this['currentElement']['appendChild'](wh_y) : /^\s*$/['test'](dc9$vi) && this['doc']['appendChild'](wh_y), this['locator'] && txye0q(this['locator'], wh_y);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (jgr3) {
    (this['locator'] = jgr3) && (jgr3['lineNumber'] = 0x0);
  }, 'comment': function (i49c2) {
    i49c2 = tpf$vdz['apply'](this, arguments);var qeozf = this['doc']['createComment'](i49c2);this['locator'] && txye0q(this['locator'], qeozf), t_my0xh(this, qeozf);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ci92tv, n518, xm_yq) {
    var njrbg3 = this['doc']['implementation'];if (njrbg3 && njrbg3['createDocumentType']) {
      var x0qmy_ = njrbg3['createDocumentType'](ci92tv, n518, xm_yq);this['locator'] && txye0q(this['locator'], x0qmy_), t_my0xh(this, x0qmy_);
    }
  }, 'warning': function (v92cit) {
    console['warn']('[xmldom warning]\t' + v92cit, th8156(this['locator']));
  }, 'error': function (qy_0e) {
    console['error']('[xmldom error]\t' + qy_0e, th8156(this['locator']));
  }, 'fatalError': function (q7x) {
    throw console['error']('[xmldom fatalError]\t' + q7x, th8156(this['locator'])), q7x;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (c9ivt$) {
  tm_0yh['prototype'][c9ivt$] = function () {
    return null;
  };
});var tmhy_0 = require('./tT12tt')['XMLReader'],
    tze0o7q = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = tzf$vd;