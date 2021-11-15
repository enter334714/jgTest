var m = wx.$g;
function gh5xia1(to4) {
  this['options'] = to4 || { 'locator': {} };
}function gkw1hax(j26zd, gs8lq, ip5xba) {
  function fot4(xh5abi) {
    var kew1vy = j26zd[xh5abi];!kew1vy && rodz2 && (kew1vy = 0x2 == j26zd['length'] ? function (bxha) {
      j26zd(xh5abi, bxha);
    } : j26zd), $2zjr[xh5abi] = kew1vy && function (d6r2) {
      kew1vy('[xmldom ' + xh5abi + ']\t' + d6r2 + gbipxa5(ip5xba));
    } || function () {};
  }if (!j26zd) {
    if (gs8lq instanceof g_0bp) return gs8lq;j26zd = gs8lq;
  }var $2zjr = {},
      rodz2 = j26zd instanceof Function;return ip5xba = ip5xba || {}, fot4('warning'), fot4('error'), fot4('fatalError'), $2zjr;
}function g_0bp() {
  this['cdata'] = !0x1;
}function gb_p05f(ru$2, h5aibx) {
  h5aibx['lineNumber'] = ru$2['lineNumber'], h5aibx['columnNumber'] = ru$2['columnNumber'];
}function gbipxa5(sgvc7q) {
  return sgvc7q ? '\x0a@' + (sgvc7q['systemId'] || '') + '#[line:' + sgvc7q['lineNumber'] + ',col:' + sgvc7q['columnNumber'] + ']' : void 0x0;
}function g$2r6uj(jzr6, wk1hx, z4odt) {
  return 'string' == typeof jzr6 ? jzr6['substr'](wk1hx, z4odt) : jzr6['length'] >= wk1hx + z4odt || wk1hx ? new java['lang']['String'](jzr6, wk1hx, z4odt) + '' : jzr6;
}function grmu6$j($r6j2, r26j$) {
  $r6j2['currentElement'] ? $r6j2['currentElement']['appendChild'](r26j$) : $r6j2['doc']['appendChild'](r26j$);
}gh5xia1['prototype']['parseFromString'] = function (_ot43f, svcg) {
  var sgc8q7 = this['options'],
      rjm$6 = new gt34ofd(),
      cg87s = sgc8q7['domBuilder'] || new g_0bp(),
      ye1kv = sgc8q7['errorHandler'],
      ge7qcv = sgc8q7['locator'],
      wvqy7e = sgc8q7['xmlns'] || {},
      xhka1 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ge7qcv && cg87s['setDocumentLocator'](ge7qcv), rjm$6['errorHandler'] = gkw1hax(ye1kv, cg87s, ge7qcv), rjm$6['domBuilder'] = sgc8q7['domBuilder'] || cg87s, /\/x?html?$/['test'](svcg) && (xhka1['nbsp'] = '\u00a0', xhka1['copy'] = '©', wvqy7e[''] = 'http://www.w3.org/1999/xhtml'), wvqy7e['xml'] = wvqy7e['xml'] || 'http://www.w3.org/XML/1998/namespace', _ot43f ? rjm$6['parse'](_ot43f, wvqy7e, xhka1) : rjm$6['errorHandler']['error']('invalid doc source'), cg87s['doc'];
}, g_0bp['prototype'] = { 'startDocument': function () {
    this['doc'] = new gq7vceg()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (k1ahi, eywv7q, _f403t, mjru$) {
    var gl = this['doc'],
        t0fp_4 = gl['createElementNS'](k1ahi, _f403t || eywv7q),
        dzt43 = mjru$['length'];grmu6$j(this, t0fp_4), this['currentElement'] = t0fp_4, this['locator'] && gb_p05f(this['locator'], t0fp_4);for (var f034t = 0x0; dzt43 > f034t; f034t++) {
      var k1ahi = mjru$['getURI'](f034t),
          r62dzj = mjru$['getValue'](f034t),
          _f403t = mjru$['getQName'](f034t),
          r6oz = gl['createAttributeNS'](k1ahi, _f403t);this['locator'] && gb_p05f(mjru$['getLocator'](f034t), r6oz), r6oz['value'] = r6oz['nodeValue'] = r62dzj, t0fp_4['setAttributeNode'](r6oz);
    }
  }, 'endElement': function () {
    {
      var _p5ib0 = this['currentElement'];_p5ib0['tagName'];
    }this['currentElement'] = _p5ib0['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (pbai, bapxi5) {
    var f4pt_0 = this['doc']['createProcessingInstruction'](pbai, bapxi5);this['locator'] && gb_p05f(this['locator'], f4pt_0), grmu6$j(this, f4pt_0);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ix1ah) {
    if (ix1ah = g$2r6uj['apply'](this, arguments)) {
      if (this['cdata']) var eyhw = this['doc']['createCDATASection'](ix1ah);else var eyhw = this['doc']['createTextNode'](ix1ah);this['currentElement'] ? this['currentElement']['appendChild'](eyhw) : /^\s*$/['test'](ix1ah) && this['doc']['appendChild'](eyhw), this['locator'] && gb_p05f(this['locator'], eyhw);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ib5ax) {
    (this['locator'] = ib5ax) && (ib5ax['lineNumber'] = 0x0);
  }, 'comment': function (c7veqg) {
    c7veqg = g$2r6uj['apply'](this, arguments);var xha1 = this['doc']['createComment'](c7veqg);this['locator'] && gb_p05f(this['locator'], xha1), grmu6$j(this, xha1);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (pf0_tb, xi5h1, _pi05) {
    var ewkv = this['doc']['implementation'];if (ewkv && ewkv['createDocumentType']) {
      var whkey = ewkv['createDocumentType'](pf0_tb, xi5h1, _pi05);this['locator'] && gb_p05f(this['locator'], whkey), grmu6$j(this, whkey);
    }
  }, 'warning': function ($6rmuj) {
    console['warn']('[xmldom warning]\t' + $6rmuj, gbipxa5(this['locator']));
  }, 'error': function (f34_o) {
    console['error']('[xmldom error]\t' + f34_o, gbipxa5(this['locator']));
  }, 'fatalError': function (kxwy) {
    throw console['error']('[xmldom fatalError]\t' + kxwy, gbipxa5(this['locator'])), kxwy;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (tp_04f) {
  g_0bp['prototype'][tp_04f] = function () {
    return null;
  };
});var gt34ofd = require('./gggsax')['XMLReader'],
    gq7vceg = exports['DOMImplementation'] = require('./gggdom')['DOMImplementation'];exports['XMLSerializer'] = require('./gggdom')['XMLSerializer'], exports['DOMParser'] = gh5xia1;