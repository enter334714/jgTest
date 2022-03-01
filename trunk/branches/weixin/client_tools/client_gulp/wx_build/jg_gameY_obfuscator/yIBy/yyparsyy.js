var a = wx.$y;
function yckn$2($ipn) {
  this['options'] = $ipn || { 'locator': {} };
}function y_fjoh7(k$ng2i, f_8o7l, hw1d) {
  function s_8lf(u5m1dt) {
    var o4f_j = k$ng2i[u5m1dt];!o4f_j && v0xrz && (o4f_j = 0x2 == k$ng2i['length'] ? function (s98l7c) {
      k$ng2i(u5m1dt, s98l7c);
    } : k$ng2i), i$k2ng[u5m1dt] = o4f_j && function (m56v3) {
      o4f_j('[xmldom ' + u5m1dt + ']\t' + m56v3 + y$nkg92(hw1d));
    } || function () {};
  }if (!k$ng2i) {
    if (f_8o7l instanceof yv36ay5) return f_8o7l;k$ng2i = f_8o7l;
  }var i$k2ng = {},
      v0xrz = k$ng2i instanceof Function;return hw1d = hw1d || {}, s_8lf('warning'), s_8lf('error'), s_8lf('fatalError'), i$k2ng;
}function yv36ay5() {
  this['cdata'] = !0x1;
}function yc87_sl(dw4thj, nq$) {
  nq$['lineNumber'] = dw4thj['lineNumber'], nq$['columnNumber'] = dw4thj['columnNumber'];
}function y$nkg92(a0y6v3) {
  return a0y6v3 ? '\x0a@' + (a0y6v3['systemId'] || '') + '#[line:' + a0y6v3['lineNumber'] + ',col:' + a0y6v3['columnNumber'] + ']' : void 0x0;
}function yz0xyre(scl29k, j4ow, sc9n2k) {
  return 'string' == typeof scl29k ? scl29k['substr'](j4ow, sc9n2k) : scl29k['length'] >= j4ow + sc9n2k || j4ow ? new java['lang']['String'](scl29k, j4ow, sc9n2k) + '' : scl29k;
}function yls9c7(uw, l2ck) {
  uw['currentElement'] ? uw['currentElement']['appendChild'](l2ck) : uw['doc']['appendChild'](l2ck);
}yckn$2['prototype']['parseFromString'] = function (in$2qg, oh_7j) {
  var exyr = this['options'],
      udt1w4 = new yht14dw(),
      zv3ry = exyr['domBuilder'] || new yv36ay5(),
      a563mu = exyr['errorHandler'],
      _ho7f = exyr['locator'],
      lof_87 = exyr['xmlns'] || {},
      hotj = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return _ho7f && zv3ry['setDocumentLocator'](_ho7f), udt1w4['errorHandler'] = y_fjoh7(a563mu, zv3ry, _ho7f), udt1w4['domBuilder'] = exyr['domBuilder'] || zv3ry, /\/x?html?$/['test'](oh_7j) && (hotj['nbsp'] = '\u00a0', hotj['copy'] = '©', lof_87[''] = 'http://www.w3.org/1999/xhtml'), lof_87['xml'] = lof_87['xml'] || 'http://www.w3.org/XML/1998/namespace', in$2qg ? udt1w4['parse'](in$2qg, lof_87, hotj) : udt1w4['errorHandler']['error']('invalid doc source'), zv3ry['doc'];
}, yv36ay5['prototype'] = { 'startDocument': function () {
    this['doc'] = new yth4woj()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (n$92kg, g2nq$, gqi2n$, v06y3a) {
    var f_j7oh = this['doc'],
        sl_78 = f_j7oh['createElementNS'](n$92kg, gqi2n$ || g2nq$),
        s2n9ck = v06y3a['length'];yls9c7(this, sl_78), this['currentElement'] = sl_78, this['locator'] && yc87_sl(this['locator'], sl_78);for (var _7l8sf = 0x0; s2n9ck > _7l8sf; _7l8sf++) {
      var n$92kg = v06y3a['getURI'](_7l8sf),
          vam36 = v06y3a['getValue'](_7l8sf),
          gqi2n$ = v06y3a['getQName'](_7l8sf),
          of_78j = f_j7oh['createAttributeNS'](n$92kg, gqi2n$);this['locator'] && yc87_sl(v06y3a['getLocator'](_7l8sf), of_78j), of_78j['value'] = of_78j['nodeValue'] = vam36, sl_78['setAttributeNode'](of_78j);
    }
  }, 'endElement': function () {
    {
      var whoj4 = this['currentElement'];whoj4['tagName'];
    }this['currentElement'] = whoj4['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (av0y, ow4hjf) {
    var vz0yr = this['doc']['createProcessingInstruction'](av0y, ow4hjf);this['locator'] && yc87_sl(this['locator'], vz0yr), yls9c7(this, vz0yr);
  }, 'ignorableWhitespace': function () {}, 'characters': function (n$2q) {
    if (n$2q = yz0xyre['apply'](this, arguments)) {
      if (this['cdata']) var u1twmd = this['doc']['createCDATASection'](n$2q);else var u1twmd = this['doc']['createTextNode'](n$2q);this['currentElement'] ? this['currentElement']['appendChild'](u1twmd) : /^\s*$/['test'](n$2q) && this['doc']['appendChild'](u1twmd), this['locator'] && yc87_sl(this['locator'], u1twmd);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function ($2ck9) {
    (this['locator'] = $2ck9) && ($2ck9['lineNumber'] = 0x0);
  }, 'comment': function (c9$kn) {
    c9$kn = yz0xyre['apply'](this, arguments);var d4u1tw = this['doc']['createComment'](c9$kn);this['locator'] && yc87_sl(this['locator'], d4u1tw), yls9c7(this, d4u1tw);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (dt1um5, qp$gi, m15) {
    var w14dh = this['doc']['implementation'];if (w14dh && w14dh['createDocumentType']) {
      var o78j_ = w14dh['createDocumentType'](dt1um5, qp$gi, m15);this['locator'] && yc87_sl(this['locator'], o78j_), yls9c7(this, o78j_);
    }
  }, 'warning': function ($pgqi) {
    console['warn']('[xmldom warning]\t' + $pgqi, y$nkg92(this['locator']));
  }, 'error': function (n$g2qi) {
    console['error']('[xmldom error]\t' + n$g2qi, y$nkg92(this['locator']));
  }, 'fatalError': function (duw4t1) {
    throw console['error']('[xmldom fatalError]\t' + duw4t1, y$nkg92(this['locator'])), duw4t1;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (npqg$) {
  yv36ay5['prototype'][npqg$] = function () {
    return null;
  };
});var yht14dw = require('./yycyy')['XMLReader'],
    yth4woj = exports['DOMImplementation'] = require('./yyDOyy')['DOMImplementation'];exports['XMLSerializer'] = require('./yyDOyy')['XMLSerializer'], exports['DOMParser'] = yckn$2;