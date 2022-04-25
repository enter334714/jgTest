var v = wx.$d;
function zagkzq(zqb0x) {
  this['options'] = zqb0x || { 'locator': {} };
}function ziuedm6(uqtgfk, qakg, bg0za) {
  function pv7r$w(g0zbqa) {
    var dume6i = uqtgfk[g0zbqa];!dume6i && hn9 && (dume6i = 0x2 == uqtgfk['length'] ? function (zag0b) {
      uqtgfk(g0zbqa, zag0b);
    } : uqtgfk), v$l7py[g0zbqa] = dume6i && function (efut) {
      dume6i('[xmldom ' + g0zbqa + ']\t' + efut + zx81rb(bg0za));
    } || function () {};
  }if (!uqtgfk) {
    if (qakg instanceof zimte) return qakg;uqtgfk = qakg;
  }var v$l7py = {},
      hn9 = uqtgfk instanceof Function;return bg0za = bg0za || {}, pv7r$w('warning'), pv7r$w('error'), pv7r$w('fatalError'), v$l7py;
}function zimte() {
  this['cdata'] = !0x1;
}function ztudm(qagk, y7w$vp) {
  y7w$vp['lineNumber'] = qagk['lineNumber'], y7w$vp['columnNumber'] = qagk['columnNumber'];
}function zx81rb(rx18) {
  return rx18 ? '\x0a@' + (rx18['systemId'] || '') + '#[line:' + rx18['lineNumber'] + ',col:' + rx18['columnNumber'] + ']' : void 0x0;
}function zifetu(v$7w, kfqgtu, jde6) {
  return 'string' == typeof v$7w ? v$7w['substr'](kfqgtu, jde6) : v$7w['length'] >= kfqgtu + jde6 || kfqgtu ? new java['lang']['String'](v$7w, kfqgtu, jde6) + '' : v$7w;
}function zhej6mn(jh_4n, ejmhn6) {
  jh_4n['currentElement'] ? jh_4n['currentElement']['appendChild'](ejmhn6) : jh_4n['doc']['appendChild'](ejmhn6);
}zagkzq['prototype']['parseFromString'] = function (rx8ab1, jhn6_4) {
  var ukgftq = this['options'],
      wr7p = new zwpr$v7(),
      iutedm = ukgftq['domBuilder'] || new zimte(),
      qxbz0 = ukgftq['errorHandler'],
      ba8xr = ukgftq['locator'],
      pr1$8w = ukgftq['xmlns'] || {},
      vp7l$y = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ba8xr && iutedm['setDocumentLocator'](ba8xr), wr7p['errorHandler'] = ziuedm6(qxbz0, iutedm, ba8xr), wr7p['domBuilder'] = ukgftq['domBuilder'] || iutedm, /\/x?html?$/['test'](jhn6_4) && (vp7l$y['nbsp'] = '\u00a0', vp7l$y['copy'] = '©', pr1$8w[''] = 'http://www.w3.org/1999/xhtml'), pr1$8w['xml'] = pr1$8w['xml'] || 'http://www.w3.org/XML/1998/namespace', rx8ab1 ? wr7p['parse'](rx8ab1, pr1$8w, vp7l$y) : wr7p['errorHandler']['error']('invalid doc source'), iutedm['doc'];
}, zimte['prototype'] = { 'startDocument': function () {
    this['doc'] = new zpw7$v()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (gk0z, edmi6, edhj, gqz0) {
    var prv$w = this['doc'],
        y7$w = prv$w['createElementNS'](gk0z, edhj || edmi6),
        dmiuet = gqz0['length'];zhej6mn(this, y7$w), this['currentElement'] = y7$w, this['locator'] && ztudm(this['locator'], y7$w);for (var nj_6 = 0x0; dmiuet > nj_6; nj_6++) {
      var gk0z = gqz0['getURI'](nj_6),
          mihde = gqz0['getValue'](nj_6),
          edhj = gqz0['getQName'](nj_6),
          x08a = prv$w['createAttributeNS'](gk0z, edhj);this['locator'] && ztudm(gqz0['getLocator'](nj_6), x08a), x08a['value'] = x08a['nodeValue'] = mihde, y7$w['setAttributeNode'](x08a);
    }
  }, 'endElement': function () {
    {
      var nhj4_ = this['currentElement'];nhj4_['tagName'];
    }this['currentElement'] = nhj4_['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (m6en, h9j_n4) {
    var fqk0g = this['doc']['createProcessingInstruction'](m6en, h9j_n4);this['locator'] && ztudm(this['locator'], fqk0g), zhej6mn(this, fqk0g);
  }, 'ignorableWhitespace': function () {}, 'characters': function (c5_o39) {
    if (c5_o39 = zifetu['apply'](this, arguments)) {
      if (this['cdata']) var py7vl$ = this['doc']['createCDATASection'](c5_o39);else var py7vl$ = this['doc']['createTextNode'](c5_o39);this['currentElement'] ? this['currentElement']['appendChild'](py7vl$) : /^\s*$/['test'](c5_o39) && this['doc']['appendChild'](py7vl$), this['locator'] && ztudm(this['locator'], py7vl$);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (c532o) {
    (this['locator'] = c532o) && (c532o['lineNumber'] = 0x0);
  }, 'comment': function (guqft) {
    guqft = zifetu['apply'](this, arguments);var bx8z = this['doc']['createComment'](guqft);this['locator'] && ztudm(this['locator'], bx8z), zhej6mn(this, bx8z);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (uftqkg, _o35, tfug) {
    var n6hj4_ = this['doc']['implementation'];if (n6hj4_ && n6hj4_['createDocumentType']) {
      var im6ud = n6hj4_['createDocumentType'](uftqkg, _o35, tfug);this['locator'] && ztudm(this['locator'], im6ud), zhej6mn(this, im6ud);
    }
  }, 'warning': function (o9_35) {
    console['warn']('[xmldom warning]\t' + o9_35, zx81rb(this['locator']));
  }, 'error': function (q0gbaz) {
    console['error']('[xmldom error]\t' + q0gbaz, zx81rb(this['locator']));
  }, 'fatalError': function (_n4j3) {
    throw console['error']('[xmldom fatalError]\t' + _n4j3, zx81rb(this['locator'])), _n4j3;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (w1rxb) {
  zimte['prototype'][w1rxb] = function () {
    return null;
  };
});var zwpr$v7 = require('./dddsax')['XMLReader'],
    zpw7$v = exports['DOMImplementation'] = require('./ddddom')['DOMImplementation'];exports['XMLSerializer'] = require('./ddddom')['XMLSerializer'], exports['DOMParser'] = zagkzq;