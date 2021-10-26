var p = wx.$h;
function a_erg86($6gb4) {
  this['options'] = $6gb4 || { 'locator': {} };
}function a_$kbhsi(jdcq0, qd7jc0, q097j3) {
  function ftvza2(jq307) {
    var j79t30 = jdcq0[jq307];!j79t30 && zav23 && (j79t30 = 0x2 == jdcq0['length'] ? function (s1hif) {
      jdcq0(jq307, s1hif);
    } : jdcq0), j93t0[jq307] = j79t30 && function (kb4$_g) {
      j79t30('[xmldom ' + jq307 + ']\t' + kb4$_g + a_g48m_(q097j3));
    } || function () {};
  }if (!jdcq0) {
    if (qd7jc0 instanceof a_iykhs) return qd7jc0;jdcq0 = qd7jc0;
  }var j93t0 = {},
      zav23 = jdcq0 instanceof Function;return q097j3 = q097j3 || {}, ftvza2('warning'), ftvza2('error'), ftvza2('fatalError'), j93t0;
}function a_iykhs() {
  this['cdata'] = !0x1;
}function a_cd07oq(t2z3a, o0q) {
  o0q['lineNumber'] = t2z3a['lineNumber'], o0q['columnNumber'] = t2z3a['columnNumber'];
}function a_g48m_(yif1s) {
  return yif1s ? '\x0a@' + (yif1s['systemId'] || '') + '#[line:' + yif1s['lineNumber'] + ',col:' + yif1s['columnNumber'] + ']' : void 0x0;
}function a_g$_4bk(kyhi$s, yzf2a, q7c9j) {
  return 'string' == typeof kyhi$s ? kyhi$s['substr'](yzf2a, q7c9j) : kyhi$s['length'] >= yzf2a + q7c9j || yzf2a ? new java['lang']['String'](kyhi$s, yzf2a, q7c9j) + '' : kyhi$s;
}function a_c0qd7o(cj70qd, nold) {
  cj70qd['currentElement'] ? cj70qd['currentElement']['appendChild'](nold) : cj70qd['doc']['appendChild'](nold);
}a_erg86['prototype']['parseFromString'] = function (t3v2z, qjd07) {
  var l5dno = this['options'],
      _g$4kb = new a_k$sihb(),
      tfa2zv = l5dno['domBuilder'] || new a_iykhs(),
      g6m_48 = l5dno['errorHandler'],
      zvf1a2 = l5dno['locator'],
      k$4h_b = l5dno['xmlns'] || {},
      $hkysi = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return zvf1a2 && tfa2zv['setDocumentLocator'](zvf1a2), _g$4kb['errorHandler'] = a_$kbhsi(g6m_48, tfa2zv, zvf1a2), _g$4kb['domBuilder'] = l5dno['domBuilder'] || tfa2zv, /\/x?html?$/['test'](qjd07) && ($hkysi['nbsp'] = '\u00a0', $hkysi['copy'] = '©', k$4h_b[''] = 'http://www.w3.org/1999/xhtml'), k$4h_b['xml'] = k$4h_b['xml'] || 'http://www.w3.org/XML/1998/namespace', t3v2z ? _g$4kb['parse'](t3v2z, k$4h_b, $hkysi) : _g$4kb['errorHandler']['error']('invalid doc source'), tfa2zv['doc'];
}, a_iykhs['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_nlc5do()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (s12f, w8rme6, sf1i, qd5ocn) {
    var g6_b4 = this['doc'],
        if12y = g6_b4['createElementNS'](s12f, sf1i || w8rme6),
        qdn5co = qd5ocn['length'];a_c0qd7o(this, if12y), this['currentElement'] = if12y, this['locator'] && a_cd07oq(this['locator'], if12y);for (var $hy = 0x0; qdn5co > $hy; $hy++) {
      var s12f = qd5ocn['getURI']($hy),
          d0q7c = qd5ocn['getValue']($hy),
          sf1i = qd5ocn['getQName']($hy),
          faz2y = g6_b4['createAttributeNS'](s12f, sf1i);this['locator'] && a_cd07oq(qd5ocn['getLocator']($hy), faz2y), faz2y['value'] = faz2y['nodeValue'] = d0q7c, if12y['setAttributeNode'](faz2y);
    }
  }, 'endElement': function () {
    {
      var t973jv = this['currentElement'];t973jv['tagName'];
    }this['currentElement'] = t973jv['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (t3jv, f2a) {
    var qod0c = this['doc']['createProcessingInstruction'](t3jv, f2a);this['locator'] && a_cd07oq(this['locator'], qod0c), a_c0qd7o(this, qod0c);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_8m) {
    if (_8m = a_g$_4bk['apply'](this, arguments)) {
      if (this['cdata']) var atv2z = this['doc']['createCDATASection'](_8m);else var atv2z = this['doc']['createTextNode'](_8m);this['currentElement'] ? this['currentElement']['appendChild'](atv2z) : /^\s*$/['test'](_8m) && this['doc']['appendChild'](atv2z), this['locator'] && a_cd07oq(this['locator'], atv2z);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (shk$b) {
    (this['locator'] = shk$b) && (shk$b['lineNumber'] = 0x0);
  }, 'comment': function (j7t90) {
    j7t90 = a_g$_4bk['apply'](this, arguments);var k$_bg = this['doc']['createComment'](j7t90);this['locator'] && a_cd07oq(this['locator'], k$_bg), a_c0qd7o(this, k$_bg);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (gk$, o0qd, h$sikb) {
    var ex8wrm = this['doc']['implementation'];if (ex8wrm && ex8wrm['createDocumentType']) {
      var y1f2 = ex8wrm['createDocumentType'](gk$, o0qd, h$sikb);this['locator'] && a_cd07oq(this['locator'], y1f2), a_c0qd7o(this, y1f2);
    }
  }, 'warning': function (jz3tv9) {
    console['warn']('[xmldom warning]\t' + jz3tv9, a_g48m_(this['locator']));
  }, 'error': function (r8wpe) {
    console['error']('[xmldom error]\t' + r8wpe, a_g48m_(this['locator']));
  }, 'fatalError': function (bk4_$g) {
    throw console['error']('[xmldom fatalError]\t' + bk4_$g, a_g48m_(this['locator'])), bk4_$g;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (tva) {
  a_iykhs['prototype'][tva] = function () {
    return null;
  };
});var a_k$sihb = require('./cccsax')['XMLReader'],
    a_nlc5do = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_erg86;