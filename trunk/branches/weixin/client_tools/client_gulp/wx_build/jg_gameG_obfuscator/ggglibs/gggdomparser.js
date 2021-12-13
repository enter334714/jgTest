var m = wx.$g;
function ge7vygq(rju$2) {
  this['options'] = rju$2 || { 'locator': {} };
}function gb5pf(jr2$u6, hxkai1, rdzj) {
  function ekwvy1(r26o) {
    var iha51 = jr2$u6[r26o];!iha51 && qsglc && (iha51 = 0x2 == jr2$u6['length'] ? function ($2jru6) {
      jr2$u6(r26o, $2jru6);
    } : jr2$u6), v7we[r26o] = iha51 && function (t_p04f) {
      iha51('[xmldom ' + r26o + ']\t' + t_p04f + gyweqv7(rdzj));
    } || function () {};
  }if (!jr2$u6) {
    if (hxkai1 instanceof ggv7csq) return hxkai1;jr2$u6 = hxkai1;
  }var v7we = {},
      qsglc = jr2$u6 instanceof Function;return rdzj = rdzj || {}, ekwvy1('warning'), ekwvy1('error'), ekwvy1('fatalError'), v7we;
}function ggv7csq() {
  this['cdata'] = !0x1;
}function gi1xahk(dr2oz6, r2j6$u) {
  r2j6$u['lineNumber'] = dr2oz6['lineNumber'], r2j6$u['columnNumber'] = dr2oz6['columnNumber'];
}function gyweqv7(haikx1) {
  return haikx1 ? '\x0a@' + (haikx1['systemId'] || '') + '#[line:' + haikx1['lineNumber'] + ',col:' + haikx1['columnNumber'] + ']' : void 0x0;
}function gzdo4(dz2o34, vqewy, vsqgc) {
  return 'string' == typeof dz2o34 ? dz2o34['substr'](vqewy, vsqgc) : dz2o34['length'] >= vqewy + vsqgc || vqewy ? new java['lang']['String'](dz2o34, vqewy, vsqgc) + '' : dz2o34;
}function gdto43z(vgyq, vwe7yk) {
  vgyq['currentElement'] ? vgyq['currentElement']['appendChild'](vwe7yk) : vgyq['doc']['appendChild'](vwe7yk);
}ge7vygq['prototype']['parseFromString'] = function (xh5a, yehwk1) {
  var vc7gq = this['options'],
      b_0pt = new gveyw1(),
      umr$j6 = vc7gq['domBuilder'] || new ggv7csq(),
      k1xhw = vc7gq['errorHandler'],
      qy7vwe = vc7gq['locator'],
      c8gsl = vc7gq['xmlns'] || {},
      vgcsq = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return qy7vwe && umr$j6['setDocumentLocator'](qy7vwe), b_0pt['errorHandler'] = gb5pf(k1xhw, umr$j6, qy7vwe), b_0pt['domBuilder'] = vc7gq['domBuilder'] || umr$j6, /\/x?html?$/['test'](yehwk1) && (vgcsq['nbsp'] = '\u00a0', vgcsq['copy'] = '©', c8gsl[''] = 'http://www.w3.org/1999/xhtml'), c8gsl['xml'] = c8gsl['xml'] || 'http://www.w3.org/XML/1998/namespace', xh5a ? b_0pt['parse'](xh5a, c8gsl, vgcsq) : b_0pt['errorHandler']['error']('invalid doc source'), umr$j6['doc'];
}, ggv7csq['prototype'] = { 'startDocument': function () {
    this['doc'] = new gqvg7cs()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ek, rj62, fp0t_4, evyw7q) {
    var dfot34 = this['doc'],
        fb_p50 = dfot34['createElementNS'](ek, fp0t_4 || rj62),
        qlsg = evyw7q['length'];gdto43z(this, fb_p50), this['currentElement'] = fb_p50, this['locator'] && gi1xahk(this['locator'], fb_p50);for (var ixk1a = 0x0; qlsg > ixk1a; ixk1a++) {
      var ek = evyw7q['getURI'](ixk1a),
          f4t_o3 = evyw7q['getValue'](ixk1a),
          fp0t_4 = evyw7q['getQName'](ixk1a),
          sg8l9c = dfot34['createAttributeNS'](ek, fp0t_4);this['locator'] && gi1xahk(evyw7q['getLocator'](ixk1a), sg8l9c), sg8l9c['value'] = sg8l9c['nodeValue'] = f4t_o3, fb_p50['setAttributeNode'](sg8l9c);
    }
  }, 'endElement': function () {
    {
      var fo_4 = this['currentElement'];fo_4['tagName'];
    }this['currentElement'] = fo_4['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ipb0a, gvc7s) {
    var do623z = this['doc']['createProcessingInstruction'](ipb0a, gvc7s);this['locator'] && gi1xahk(this['locator'], do623z), gdto43z(this, do623z);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ewvk7y) {
    if (ewvk7y = gzdo4['apply'](this, arguments)) {
      if (this['cdata']) var ru6j = this['doc']['createCDATASection'](ewvk7y);else var ru6j = this['doc']['createTextNode'](ewvk7y);this['currentElement'] ? this['currentElement']['appendChild'](ru6j) : /^\s*$/['test'](ewvk7y) && this['doc']['appendChild'](ru6j), this['locator'] && gi1xahk(this['locator'], ru6j);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (x1hyw) {
    (this['locator'] = x1hyw) && (x1hyw['lineNumber'] = 0x0);
  }, 'comment': function (zd4to) {
    zd4to = gzdo4['apply'](this, arguments);var evq = this['doc']['createComment'](zd4to);this['locator'] && gi1xahk(this['locator'], evq), gdto43z(this, evq);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (a5hb, aix51, lsgq8c) {
    var hxa = this['doc']['implementation'];if (hxa && hxa['createDocumentType']) {
      var b5iap0 = hxa['createDocumentType'](a5hb, aix51, lsgq8c);this['locator'] && gi1xahk(this['locator'], b5iap0), gdto43z(this, b5iap0);
    }
  }, 'warning': function (axipb) {
    console['warn']('[xmldom warning]\t' + axipb, gyweqv7(this['locator']));
  }, 'error': function (hik1a) {
    console['error']('[xmldom error]\t' + hik1a, gyweqv7(this['locator']));
  }, 'fatalError': function (iaxbp5) {
    throw console['error']('[xmldom fatalError]\t' + iaxbp5, gyweqv7(this['locator'])), iaxbp5;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (zr26dj) {
  ggv7csq['prototype'][zr26dj] = function () {
    return null;
  };
});var gveyw1 = require('./gggsax')['XMLReader'],
    gqvg7cs = exports['DOMImplementation'] = require('./gggdom')['DOMImplementation'];exports['XMLSerializer'] = require('./gggdom')['XMLSerializer'], exports['DOMParser'] = ge7vygq;