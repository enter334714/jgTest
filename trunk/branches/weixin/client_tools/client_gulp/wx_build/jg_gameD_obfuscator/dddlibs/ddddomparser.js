var v = wx.$d;
function zdi6hme(kgq0fz) {
  this['options'] = kgq0fz || { 'locator': {} };
}function zj9n4_(imuted, tidfk, vp$7wy) {
  function ft(feidt) {
    var ab08zx = imuted[feidt];!ab08zx && _h9n4 && (ab08zx = 0x2 == imuted['length'] ? function (qa0zkg) {
      imuted(feidt, qa0zkg);
    } : imuted), gf0z[feidt] = ab08zx && function (prvw$) {
      ab08zx('[xmldom ' + feidt + ']\t' + prvw$ + zg0kfqt(vp$7wy));
    } || function () {};
  }if (!imuted) {
    if (tidfk instanceof ztkfigu) return tidfk;imuted = tidfk;
  }var gf0z = {},
      _h9n4 = imuted instanceof Function;return vp$7wy = vp$7wy || {}, ft('warning'), ft('error'), ft('fatalError'), gf0z;
}function ztkfigu() {
  this['cdata'] = !0x1;
}function zqgk0ft(nj6_h, hn4j9) {
  hn4j9['lineNumber'] = nj6_h['lineNumber'], hn4j9['columnNumber'] = nj6_h['columnNumber'];
}function zg0kfqt(_j9h) {
  return _j9h ? '\x0a@' + (_j9h['systemId'] || '') + '#[line:' + _j9h['lineNumber'] + ',col:' + _j9h['columnNumber'] + ']' : void 0x0;
}function zikftdu(n_39c, _hj46n, $lvy) {
  return 'string' == typeof n_39c ? n_39c['substr'](_hj46n, $lvy) : n_39c['length'] >= _hj46n + $lvy || _hj46n ? new java['lang']['String'](n_39c, _hj46n, $lvy) + '' : n_39c;
}function zprwv7(pw1, axrb) {
  pw1['currentElement'] ? pw1['currentElement']['appendChild'](axrb) : pw1['doc']['appendChild'](axrb);
}zdi6hme['prototype']['parseFromString'] = function (iefud, qf) {
  var _n6h4j = this['options'],
      kzqgf0 = new zj_3n94(),
      o3c5 = _n6h4j['domBuilder'] || new ztkfigu(),
      p$r81 = _n6h4j['errorHandler'],
      utidf = _n6h4j['locator'],
      iume6d = _n6h4j['xmlns'] || {},
      itdfu = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return utidf && o3c5['setDocumentLocator'](utidf), kzqgf0['errorHandler'] = zj9n4_(p$r81, o3c5, utidf), kzqgf0['domBuilder'] = _n6h4j['domBuilder'] || o3c5, /\/x?html?$/['test'](qf) && (itdfu['nbsp'] = '\u00a0', itdfu['copy'] = '©', iume6d[''] = 'http://www.w3.org/1999/xhtml'), iume6d['xml'] = iume6d['xml'] || 'http://www.w3.org/XML/1998/namespace', iefud ? kzqgf0['parse'](iefud, iume6d, itdfu) : kzqgf0['errorHandler']['error']('invalid doc source'), o3c5['doc'];
}, ztkfigu['prototype'] = { 'startDocument': function () {
    this['doc'] = new z$wpy7()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function ($1pr8w, c_593, tfugqk, deum) {
    var fgqtu = this['doc'],
        bax8r = fgqtu['createElementNS']($1pr8w, tfugqk || c_593),
        wrx1$8 = deum['length'];zprwv7(this, bax8r), this['currentElement'] = bax8r, this['locator'] && zqgk0ft(this['locator'], bax8r);for (var mehj = 0x0; wrx1$8 > mehj; mehj++) {
      var $1pr8w = deum['getURI'](mehj),
          h6_nj = deum['getValue'](mehj),
          tfugqk = deum['getQName'](mehj),
          x1rwb8 = fgqtu['createAttributeNS']($1pr8w, tfugqk);this['locator'] && zqgk0ft(deum['getLocator'](mehj), x1rwb8), x1rwb8['value'] = x1rwb8['nodeValue'] = h6_nj, bax8r['setAttributeNode'](x1rwb8);
    }
  }, 'endElement': function () {
    {
      var l$ypv = this['currentElement'];l$ypv['tagName'];
    }this['currentElement'] = l$ypv['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (x8, jhmen) {
    var n9_4j3 = this['doc']['createProcessingInstruction'](x8, jhmen);this['locator'] && zqgk0ft(this['locator'], n9_4j3), zprwv7(this, n9_4j3);
  }, 'ignorableWhitespace': function () {}, 'characters': function (v7py) {
    if (v7py = zikftdu['apply'](this, arguments)) {
      if (this['cdata']) var h6edmj = this['doc']['createCDATASection'](v7py);else var h6edmj = this['doc']['createTextNode'](v7py);this['currentElement'] ? this['currentElement']['appendChild'](h6edmj) : /^\s*$/['test'](v7py) && this['doc']['appendChild'](h6edmj), this['locator'] && zqgk0ft(this['locator'], h6edmj);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (fuqgkt) {
    (this['locator'] = fuqgkt) && (fuqgkt['lineNumber'] = 0x0);
  }, 'comment': function (w$8x1) {
    w$8x1 = zikftdu['apply'](this, arguments);var _394co = this['doc']['createComment'](w$8x1);this['locator'] && zqgk0ft(this['locator'], _394co), zprwv7(this, _394co);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (w$prv, n9_3c, tfuide) {
    var iftduk = this['doc']['implementation'];if (iftduk && iftduk['createDocumentType']) {
      var iudtm = iftduk['createDocumentType'](w$prv, n9_3c, tfuide);this['locator'] && zqgk0ft(this['locator'], iudtm), zprwv7(this, iudtm);
    }
  }, 'warning': function (p$r8w1) {
    console['warn']('[xmldom warning]\t' + p$r8w1, zg0kfqt(this['locator']));
  }, 'error': function (he6jmn) {
    console['error']('[xmldom error]\t' + he6jmn, zg0kfqt(this['locator']));
  }, 'fatalError': function (j9hn_) {
    throw console['error']('[xmldom fatalError]\t' + j9hn_, zg0kfqt(this['locator'])), j9hn_;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (r7v) {
  ztkfigu['prototype'][r7v] = function () {
    return null;
  };
});var zj_3n94 = require('./dddsax')['XMLReader'],
    z$wpy7 = exports['DOMImplementation'] = require('./ddddom')['DOMImplementation'];exports['XMLSerializer'] = require('./ddddom')['XMLSerializer'], exports['DOMParser'] = zdi6hme;