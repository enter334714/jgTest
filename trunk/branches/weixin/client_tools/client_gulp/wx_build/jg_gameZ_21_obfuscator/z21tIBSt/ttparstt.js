var v = wx.$d;
function zoq4h0m(k23) {
  this['options'] = k23 || { 'locator': {} };
}function zr7new(go0, _kv32z, _186i) {
  function fbudl(u9adxf) {
    var gm$o0 = go0[u9adxf];!gm$o0 && wnyce7 && (gm$o0 = 0x2 == go0['length'] ? function (rec7n) {
      go0(u9adxf, rec7n);
    } : go0), uib8fl[u9adxf] = gm$o0 && function (hpoq) {
      gm$o0('[xmldom ' + u9adxf + ']\t' + hpoq + zd9lufb(_186i));
    } || function () {};
  }if (!go0) {
    if (_kv32z instanceof zad9ux5) return _kv32z;go0 = _kv32z;
  }var uib8fl = {},
      wnyce7 = go0 instanceof Function;return _186i = _186i || {}, fbudl('warning'), fbudl('error'), fbudl('fatalError'), uib8fl;
}function zad9ux5() {
  this['cdata'] = !0x1;
}function zv3yk2(x9ufad, dl9uf) {
  dl9uf['lineNumber'] = x9ufad['lineNumber'], dl9uf['columnNumber'] = x9ufad['columnNumber'];
}function zd9lufb(v6z21_) {
  return v6z21_ ? '\x0a@' + (v6z21_['systemId'] || '') + '#[line:' + v6z21_['lineNumber'] + ',col:' + v6z21_['columnNumber'] + ']' : void 0x0;
}function zom0h4(kycw3z, tgm0o, y7wk3c) {
  return 'string' == typeof kycw3z ? kycw3z['substr'](tgm0o, y7wk3c) : kycw3z['length'] >= tgm0o + y7wk3c || tgm0o ? new java['lang']['String'](kycw3z, tgm0o, y7wk3c) + '' : kycw3z;
}function zpo4h5q(yk3czw, ud59) {
  yk3czw['currentElement'] ? yk3czw['currentElement']['appendChild'](ud59) : yk3czw['doc']['appendChild'](ud59);
}zoq4h0m['prototype']['parseFromString'] = function (x45qap, cykw7) {
  var b8uil = this['options'],
      cne7y = new zmo$t(),
      _zv362 = b8uil['domBuilder'] || new zad9ux5(),
      gmo$t0 = b8uil['errorHandler'],
      z6v3 = b8uil['locator'],
      o40hqp = b8uil['xmlns'] || {},
      oh4p5q = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return z6v3 && _zv362['setDocumentLocator'](z6v3), cne7y['errorHandler'] = zr7new(gmo$t0, _zv362, z6v3), cne7y['domBuilder'] = b8uil['domBuilder'] || _zv362, /\/x?html?$/['test'](cykw7) && (oh4p5q['nbsp'] = '\u00a0', oh4p5q['copy'] = '©', o40hqp[''] = 'http://www.w3.org/1999/xhtml'), o40hqp['xml'] = o40hqp['xml'] || 'http://www.w3.org/XML/1998/namespace', x45qap ? cne7y['parse'](x45qap, o40hqp, oh4p5q) : cne7y['errorHandler']['error']('invalid doc source'), _zv362['doc'];
}, zad9ux5['prototype'] = { 'startDocument': function () {
    this['doc'] = new zwny7ce()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (i8blu, kz3cw, _6182, kzyv3w) {
    var b8fudl = this['doc'],
        fb8dl = b8fudl['createElementNS'](i8blu, _6182 || kz3cw),
        c7wnky = kzyv3w['length'];zpo4h5q(this, fb8dl), this['currentElement'] = fb8dl, this['locator'] && zv3yk2(this['locator'], fb8dl);for (var v62i1_ = 0x0; c7wnky > v62i1_; v62i1_++) {
      var i8blu = kzyv3w['getURI'](v62i1_),
          cnr7we = kzyv3w['getValue'](v62i1_),
          _6182 = kzyv3w['getQName'](v62i1_),
          mg0o$ = b8fudl['createAttributeNS'](i8blu, _6182);this['locator'] && zv3yk2(kzyv3w['getLocator'](v62i1_), mg0o$), mg0o$['value'] = mg0o$['nodeValue'] = cnr7we, fb8dl['setAttributeNode'](mg0o$);
    }
  }, 'endElement': function () {
    {
      var $mgot0 = this['currentElement'];$mgot0['tagName'];
    }this['currentElement'] = $mgot0['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (dufbl9, q54hop) {
    var xud9lf = this['doc']['createProcessingInstruction'](dufbl9, q54hop);this['locator'] && zv3yk2(this['locator'], xud9lf), zpo4h5q(this, xud9lf);
  }, 'ignorableWhitespace': function () {}, 'characters': function (qm$0oh) {
    if (qm$0oh = zom0h4['apply'](this, arguments)) {
      if (this['cdata']) var z32v6 = this['doc']['createCDATASection'](qm$0oh);else var z32v6 = this['doc']['createTextNode'](qm$0oh);this['currentElement'] ? this['currentElement']['appendChild'](z32v6) : /^\s*$/['test'](qm$0oh) && this['doc']['appendChild'](z32v6), this['locator'] && zv3yk2(this['locator'], z32v6);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (u8fbli) {
    (this['locator'] = u8fbli) && (u8fbli['lineNumber'] = 0x0);
  }, 'comment': function (c7rejn) {
    c7rejn = zom0h4['apply'](this, arguments);var lufdb8 = this['doc']['createComment'](c7rejn);this['locator'] && zv3yk2(this['locator'], lufdb8), zpo4h5q(this, lufdb8);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (v_16i, d95pxa, i_218) {
    var zwy3v = this['doc']['implementation'];if (zwy3v && zwy3v['createDocumentType']) {
      var ywk = zwy3v['createDocumentType'](v_16i, d95pxa, i_218);this['locator'] && zv3yk2(this['locator'], ywk), zpo4h5q(this, ywk);
    }
  }, 'warning': function (bl9udf) {
    console['warn']('[xmldom warning]\t' + bl9udf, zd9lufb(this['locator']));
  }, 'error': function (f9adxu) {
    console['error']('[xmldom error]\t' + f9adxu, zd9lufb(this['locator']));
  }, 'fatalError': function (dfxa) {
    throw console['error']('[xmldom fatalError]\t' + dfxa, zd9lufb(this['locator'])), dfxa;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (p04ho) {
  zad9ux5['prototype'][p04ho] = function () {
    return null;
  };
});var zmo$t = require('./tT12tt')['XMLReader'],
    zwny7ce = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = zoq4h0m;