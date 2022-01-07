var Q = wx.$v;
function vos$4f(ot43$) {
  this['options'] = ot43$ || { 'locator': {} };
}function vx5p7vg(o34ns, qxgwep, l8yz6) {
  function iso$9($fi4s) {
    var on4$3s = o34ns[$fi4s];!on4$3s && o$f9si && (on4$3s = 0x2 == o34ns['length'] ? function (k5x7vp) {
      o34ns($fi4s, k5x7vp);
    } : o34ns), zyu6hl[$fi4s] = on4$3s && function (t2o43n) {
      on4$3s('[xmldom ' + $fi4s + ']\t' + t2o43n + vhy16zl(l8yz6));
    } || function () {};
  }if (!o34ns) {
    if (qxgwep instanceof vo$t3n4) return qxgwep;o34ns = qxgwep;
  }var zyu6hl = {},
      o$f9si = o34ns instanceof Function;return l8yz6 = l8yz6 || {}, iso$9('warning'), iso$9('error'), iso$9('fatalError'), zyu6hl;
}function vo$t3n4() {
  this['cdata'] = !0x1;
}function vluze8b(mjk0c, xkv57p) {
  xkv57p['lineNumber'] = mjk0c['lineNumber'], xkv57p['columnNumber'] = mjk0c['columnNumber'];
}function vhy16zl(_h21tn) {
  return _h21tn ? '\x0a@' + (_h21tn['systemId'] || '') + '#[line:' + _h21tn['lineNumber'] + ',col:' + _h21tn['columnNumber'] + ']' : void 0x0;
}function vn34$os(n_t21h, hl6zy1, $s3o4n) {
  return 'string' == typeof n_t21h ? n_t21h['substr'](hl6zy1, $s3o4n) : n_t21h['length'] >= hl6zy1 + $s3o4n || hl6zy1 ? new java['lang']['String'](n_t21h, hl6zy1, $s3o4n) + '' : n_t21h;
}function vo2n3(beg8, u8l6z) {
  beg8['currentElement'] ? beg8['currentElement']['appendChild'](u8l6z) : beg8['doc']['appendChild'](u8l6z);
}vos$4f['prototype']['parseFromString'] = function (os$4i3, sir9) {
  var t31 = this['options'],
      k0cm5 = new vot3n$(),
      bqewg8 = t31['domBuilder'] || new vo$t3n4(),
      $rsf9 = t31['errorHandler'],
      i$9s = t31['locator'],
      qpegw = t31['xmlns'] || {},
      gvxq = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return i$9s && bqewg8['setDocumentLocator'](i$9s), k0cm5['errorHandler'] = vx5p7vg($rsf9, bqewg8, i$9s), k0cm5['domBuilder'] = t31['domBuilder'] || bqewg8, /\/x?html?$/['test'](sir9) && (gvxq['nbsp'] = '\u00a0', gvxq['copy'] = '©', qpegw[''] = 'http://www.w3.org/1999/xhtml'), qpegw['xml'] = qpegw['xml'] || 'http://www.w3.org/XML/1998/namespace', os$4i3 ? k0cm5['parse'](os$4i3, qpegw, gvxq) : k0cm5['errorHandler']['error']('invalid doc source'), bqewg8['doc'];
}, vo$t3n4['prototype'] = { 'startDocument': function () {
    this['doc'] = new vvxk75p()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (yzl68, $3n4to, e8lq, gqvwp) {
    var zulbe = this['doc'],
        z6lh1 = zulbe['createElementNS'](yzl68, e8lq || $3n4to),
        bqwg = gqvwp['length'];vo2n3(this, z6lh1), this['currentElement'] = z6lh1, this['locator'] && vluze8b(this['locator'], z6lh1);for (var o23t = 0x0; bqwg > o23t; o23t++) {
      var yzl68 = gqvwp['getURI'](o23t),
          lhz61 = gqvwp['getValue'](o23t),
          e8lq = gqvwp['getQName'](o23t),
          tn23_4 = zulbe['createAttributeNS'](yzl68, e8lq);this['locator'] && vluze8b(gqvwp['getLocator'](o23t), tn23_4), tn23_4['value'] = tn23_4['nodeValue'] = lhz61, z6lh1['setAttributeNode'](tn23_4);
    }
  }, 'endElement': function () {
    {
      var p570k = this['currentElement'];p570k['tagName'];
    }this['currentElement'] = p570k['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (km5c70, yht2_) {
    var weubq8 = this['doc']['createProcessingInstruction'](km5c70, yht2_);this['locator'] && vluze8b(this['locator'], weubq8), vo2n3(this, weubq8);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_yh2) {
    if (_yh2 = vn34$os['apply'](this, arguments)) {
      if (this['cdata']) var $3osn4 = this['doc']['createCDATASection'](_yh2);else var $3osn4 = this['doc']['createTextNode'](_yh2);this['currentElement'] ? this['currentElement']['appendChild']($3osn4) : /^\s*$/['test'](_yh2) && this['doc']['appendChild']($3osn4), this['locator'] && vluze8b(this['locator'], $3osn4);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (t3o42) {
    (this['locator'] = t3o42) && (t3o42['lineNumber'] = 0x0);
  }, 'comment': function (ckd7m) {
    ckd7m = vn34$os['apply'](this, arguments);var i$o43 = this['doc']['createComment'](ckd7m);this['locator'] && vluze8b(this['locator'], i$o43), vo2n3(this, i$o43);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function ($n4o3s, hyzl6, v57k0) {
    var k7p5 = this['doc']['implementation'];if (k7p5 && k7p5['createDocumentType']) {
      var ht_n12 = k7p5['createDocumentType']($n4o3s, hyzl6, v57k0);this['locator'] && vluze8b(this['locator'], ht_n12), vo2n3(this, ht_n12);
    }
  }, 'warning': function ($o43nt) {
    console['warn']('[xmldom warning]\t' + $o43nt, vhy16zl(this['locator']));
  }, 'error': function (qpxvwg) {
    console['error']('[xmldom error]\t' + qpxvwg, vhy16zl(this['locator']));
  }, 'fatalError': function (kd7c) {
    throw console['error']('[xmldom fatalError]\t' + kd7c, vhy16zl(this['locator'])), kd7c;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (pv7k5x) {
  vo$t3n4['prototype'][pv7k5x] = function () {
    return null;
  };
});var vot3n$ = require('./vv12vv')['XMLReader'],
    vvxk75p = exports['DOMImplementation'] = require('./vvDOvv')['DOMImplementation'];exports['XMLSerializer'] = require('./vvDOvv')['XMLSerializer'], exports['DOMParser'] = vos$4f;