var G = wx.$E;
function Edij5k6(h9qgu) {
  this['options'] = h9qgu || { 'locator': {} };
}function Eylnpox($4bm7c, dtji1, $b4ck) {
  function yngh9(d56j$k) {
    var bfmc = $4bm7c[d56j$k];!bfmc && c4b7fm && (bfmc = 0x2 == $4bm7c['length'] ? function (mw8b7) {
      $4bm7c(d56j$k, mw8b7);
    } : $4bm7c), i1dj65[d56j$k] = bfmc && function (yphgn9) {
      bfmc('[xmldom ' + d56j$k + ']\t' + yphgn9 + Elxyp($b4ck));
    } || function () {};
  }if (!$4bm7c) {
    if (dtji1 instanceof Em748b) return dtji1;$4bm7c = dtji1;
  }var i1dj65 = {},
      c4b7fm = $4bm7c instanceof Function;return $b4ck = $b4ck || {}, yngh9('warning'), yngh9('error'), yngh9('fatalError'), i1dj65;
}function Em748b() {
  this['cdata'] = !0x1;
}function Exlygpn(hyglp, ikd6) {
  ikd6['lineNumber'] = hyglp['lineNumber'], ikd6['columnNumber'] = hyglp['columnNumber'];
}function Elxyp(_is2t) {
  return _is2t ? '\x0a@' + (_is2t['systemId'] || '') + '#[line:' + _is2t['lineNumber'] + ',col:' + _is2t['columnNumber'] + ']' : void 0x0;
}function Eylpgh(wfb87m, pgn9h, kjd5$6) {
  return 'string' == typeof wfb87m ? wfb87m['substr'](pgn9h, kjd5$6) : wfb87m['length'] >= pgn9h + kjd5$6 || pgn9h ? new java['lang']['String'](wfb87m, pgn9h, kjd5$6) + '' : wfb87m;
}function Emfbw8(dj5$k, qwrv8a) {
  dj5$k['currentElement'] ? dj5$k['currentElement']['appendChild'](qwrv8a) : dj5$k['doc']['appendChild'](qwrv8a);
}Edij5k6['prototype']['parseFromString'] = function (j5i6d, rqvauw) {
  var ngpy9 = this['options'],
      j65kid = new Eghu9(),
      hrq9ua = ngpy9['domBuilder'] || new Em748b(),
      gpy9u = ngpy9['errorHandler'],
      mc7f = ngpy9['locator'],
      d1ji5_ = ngpy9['xmlns'] || {},
      idt1s_ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return mc7f && hrq9ua['setDocumentLocator'](mc7f), j65kid['errorHandler'] = Eylnpox(gpy9u, hrq9ua, mc7f), j65kid['domBuilder'] = ngpy9['domBuilder'] || hrq9ua, /\/x?html?$/['test'](rqvauw) && (idt1s_['nbsp'] = '\u00a0', idt1s_['copy'] = '©', d1ji5_[''] = 'http://www.w3.org/1999/xhtml'), d1ji5_['xml'] = d1ji5_['xml'] || 'http://www.w3.org/XML/1998/namespace', j5i6d ? j65kid['parse'](j5i6d, d1ji5_, idt1s_) : j65kid['errorHandler']['error']('invalid doc source'), hrq9ua['doc'];
}, Em748b['prototype'] = { 'startDocument': function () {
    this['doc'] = new Ei_t2()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (q8arvw, d5j6$k, m$4b7, ij5_d1) {
    var wm8bf = this['doc'],
        agqhu9 = wm8bf['createElementNS'](q8arvw, m$4b7 || d5j6$k),
        a9uhpg = ij5_d1['length'];Emfbw8(this, agqhu9), this['currentElement'] = agqhu9, this['locator'] && Exlygpn(this['locator'], agqhu9);for (var c5 = 0x0; a9uhpg > c5; c5++) {
      var q8arvw = ij5_d1['getURI'](c5),
          mc$7b4 = ij5_d1['getValue'](c5),
          m$4b7 = ij5_d1['getQName'](c5),
          g9auqh = wm8bf['createAttributeNS'](q8arvw, m$4b7);this['locator'] && Exlygpn(ij5_d1['getLocator'](c5), g9auqh), g9auqh['value'] = g9auqh['nodeValue'] = mc$7b4, agqhu9['setAttributeNode'](g9auqh);
    }
  }, 'endElement': function () {
    {
      var gxpnl = this['currentElement'];gxpnl['tagName'];
    }this['currentElement'] = gxpnl['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (jd156, k4bm$c) {
    var xnlpy = this['doc']['createProcessingInstruction'](jd156, k4bm$c);this['locator'] && Exlygpn(this['locator'], xnlpy), Emfbw8(this, xnlpy);
  }, 'ignorableWhitespace': function () {}, 'characters': function (urvaq9) {
    if (urvaq9 = Eylpgh['apply'](this, arguments)) {
      if (this['cdata']) var fbw7m = this['doc']['createCDATASection'](urvaq9);else var fbw7m = this['doc']['createTextNode'](urvaq9);this['currentElement'] ? this['currentElement']['appendChild'](fbw7m) : /^\s*$/['test'](urvaq9) && this['doc']['appendChild'](fbw7m), this['locator'] && Exlygpn(this['locator'], fbw7m);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (wuavrq) {
    (this['locator'] = wuavrq) && (wuavrq['lineNumber'] = 0x0);
  }, 'comment': function (pxn) {
    pxn = Eylpgh['apply'](this, arguments);var ikjd56 = this['doc']['createComment'](pxn);this['locator'] && Exlygpn(this['locator'], ikjd56), Emfbw8(this, ikjd56);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (phga9, qwa8v, rqwav8) {
    var b4m7 = this['doc']['implementation'];if (b4m7 && b4m7['createDocumentType']) {
      var _ij51d = b4m7['createDocumentType'](phga9, qwa8v, rqwav8);this['locator'] && Exlygpn(this['locator'], _ij51d), Emfbw8(this, _ij51d);
    }
  }, 'warning': function (dk6ij5) {
    console['warn']('[xmldom warning]\t' + dk6ij5, Elxyp(this['locator']));
  }, 'error': function (s1_di) {
    console['error']('[xmldom error]\t' + s1_di, Elxyp(this['locator']));
  }, 'fatalError': function (vaqurw) {
    throw console['error']('[xmldom fatalError]\t' + vaqurw, Elxyp(this['locator'])), vaqurw;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (c47bm$) {
  Em748b['prototype'][c47bm$] = function () {
    return null;
  };
});var Eghu9 = require('./DD88DD88cDD88DD88')['XMLReader'],
    Ei_t2 = exports['DOMImplementation'] = require('./DD88DD88DODD88DD88')['DOMImplementation'];exports['XMLSerializer'] = require('./DD88DD88DODD88DD88')['XMLSerializer'], exports['DOMParser'] = Edij5k6;