var Q = wx.$I;
function i__yip9(h6ljei) {
  this['options'] = h6ljei || { 'locator': {} };
}function i_qxf(xf$7qg, _5ymn1, f78skr) {
  function n_5y1m(be6i) {
    var ehlj = xf$7qg[be6i];!ehlj && m2nt && (ehlj = 0x2 == xf$7qg['length'] ? function (awuzcr) {
      xf$7qg(be6i, awuzcr);
    } : xf$7qg), ehdo3[be6i] = ehlj ? function (z0uct2) {
      ehlj('[xmldom ' + be6i + ']\t' + z0uct2 + i_n2_1m(f78skr));
    } : function () {};
  }if (!xf$7qg) {
    if (_5ymn1 instanceof i__n95y) return _5ymn1;xf$7qg = _5ymn1;
  }var ehdo3 = {},
      m2nt = xf$7qg instanceof Function;return f78skr = f78skr || {}, n_5y1m('warning'), n_5y1m('error'), n_5y1m('fatalError'), ehdo3;
}function i__n95y() {
  this['cdata'] = !0x1;
}function i_x$vqg4(wk8aru, pnb) {
  pnb['lineNumber'] = wk8aru['lineNumber'], pnb['columnNumber'] = wk8aru['columnNumber'];
}function i_n2_1m(f$7gxq) {
  return f$7gxq ? '\x0a@' + (f$7gxq['systemId'] || '') + '#[line:' + f$7gxq['lineNumber'] + ',col:' + f$7gxq['columnNumber'] + ']' : void 0x0;
}function i_$g7qx(f7rsk8, nb_y, iyjb9) {
  return 'string' == typeof f7rsk8 ? f7rsk8['substr'](nb_y, iyjb9) : f7rsk8['length'] >= nb_y + iyjb9 || nb_y ? new java['lang']['String'](f7rsk8, nb_y, iyjb9) + '' : f7rsk8;
}function i_k7sx8(uackr, oelh6j) {
  (uackr['currentElement'] || uackr['doc'])['appendChild'](oelh6j);
}i__yip9['prototype']['parseFromString'] = function (tc102z, uzt0wc) {
  var sr8ka = this['options'],
      zmt210 = new i_hl3(),
      sr87f = sr8ka['domBuilder'] || new i__n95y(),
      y9p5_n = sr8ka['errorHandler'],
      gxvf$q = sr8ka['locator'],
      ho6ed = sr8ka['xmlns'] || {},
      w8ur = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return gxvf$q && sr87f['setDocumentLocator'](gxvf$q), zmt210['errorHandler'] = i_qxf(y9p5_n, sr87f, gxvf$q), zmt210['domBuilder'] = sr8ka['domBuilder'] || sr87f, /\/x?html?$/['test'](uzt0wc) && (w8ur['nbsp'] = '\u00a0', w8ur['copy'] = '©', ho6ed[''] = 'http://www.w3.org/1999/xhtml'), ho6ed['xml'] = ho6ed['xml'] || 'http://www.w3.org/XML/1998/namespace', tc102z ? zmt210['parse'](tc102z, ho6ed, w8ur) : zmt210['errorHandler']['error']('invalid doc source'), sr87f['doc'];
}, i__n95y['prototype'] = { 'startDocument': function () {
    this['doc'] = new i_ca0zwu()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (lib9p, uark8w, _5py9n, jbli9p) {
    var kr7a8 = this['doc'],
        $v4x = kr7a8['createElementNS'](lib9p, _5py9n || uark8w),
        wrca = jbli9p['length'];i_k7sx8(this, $v4x), this['currentElement'] = $v4x, this['locator'] && i_x$vqg4(this['locator'], $v4x);for (var kf8xs7 = 0x0; kf8xs7 < wrca; kf8xs7++) {
      var lib9p = jbli9p['getURI'](kf8xs7),
          mt15n2 = jbli9p['getValue'](kf8xs7),
          _5py9n = jbli9p['getQName'](kf8xs7),
          arwku = kr7a8['createAttributeNS'](lib9p, _5py9n);this['locator'] && i_x$vqg4(jbli9p['getLocator'](kf8xs7), arwku), arwku['value'] = arwku['nodeValue'] = mt15n2, $v4x['setAttributeNode'](arwku);
    }
  }, 'endElement': function () {
    var c12t0 = this['currentElement'];c12t0['tagName'], this['currentElement'] = c12t0['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (wuz0c, gq7$f) {
    gq7$f = this['doc']['createProcessingInstruction'](wuz0c, gq7$f), (this['locator'] && i_x$vqg4(this['locator'], gq7$f), i_k7sx8(this, gq7$f));
  }, 'ignorableWhitespace': function () {}, 'characters': function ($7fxgq) {
    var l6ieh;($7fxgq = i_$g7qx['apply'](this, arguments)) && (l6ieh = this['cdata'] ? this['doc']['createCDATASection']($7fxgq) : this['doc']['createTextNode']($7fxgq), this['currentElement'] ? this['currentElement']['appendChild'](l6ieh) : /^\s*$/['test']($7fxgq) && this['doc']['appendChild'](l6ieh), this['locator'] && i_x$vqg4(this['locator'], l6ieh));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (gx$7s) {
    (this['locator'] = gx$7s) && (gx$7s['lineNumber'] = 0x0);
  }, 'comment': function (eilb) {
    eilb = i_$g7qx['apply'](this, arguments);var qv$x4g = this['doc']['createComment'](eilb);this['locator'] && i_x$vqg4(this['locator'], qv$x4g), i_k7sx8(this, qv$x4g);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (holj, wcraz, heloj6) {
    var y9_ipb = this['doc']['implementation'];y9_ipb && y9_ipb['createDocumentType'] && (heloj6 = y9_ipb['createDocumentType'](holj, wcraz, heloj6), this['locator'] && i_x$vqg4(this['locator'], heloj6), i_k7sx8(this, heloj6));
  }, 'warning': function (y5mn_) {
    console['warn']('[xmldom warning]\t' + y5mn_, i_n2_1m(this['locator']));
  }, 'error': function (jhi) {
    console['error']('[xmldom error]\t' + jhi, i_n2_1m(this['locator']));
  }, 'fatalError': function (zwruca) {
    throw console['error']('[xmldom fatalError]\t' + zwruca, i_n2_1m(this['locator'])), zwruca;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (a7ksr) {
  i__n95y['prototype'][a7ksr] = function () {
    return null;
  };
});var i_hl3 = require('./iiiSAX')['XMLReader'],
    i_ca0zwu = exports['DOMImplementation'] = require('./iiiDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./iiiDOM')['XMLSerializer'], exports['DOMParser'] = i__yip9;