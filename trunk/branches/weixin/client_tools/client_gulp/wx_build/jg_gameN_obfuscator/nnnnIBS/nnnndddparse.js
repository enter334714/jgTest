var A = wx.$N;
function n_p079c(ns5c7z) {
  this['options'] = ns5c7z || { 'locator': {} };
}function n_zsxcd(ij9f, dxmlnz, _u14k) {
  function gv3fyr(ew26o) {
    var vfiyrg = ij9f[ew26o];!vfiyrg && n5s7cz && (vfiyrg = 0x2 == ij9f['length'] ? function (fqij9) {
      ij9f(ew26o, fqij9);
    } : ij9f), wabt6[ew26o] = vfiyrg && function (jp9iyq) {
      vfiyrg('[xmldom ' + ew26o + ']\t' + jp9iyq + n_oevr(_u14k));
    } || function () {};
  }if (!ij9f) {
    if (dxmlnz instanceof n_ao3e28) return dxmlnz;ij9f = dxmlnz;
  }var wabt6 = {},
      n5s7cz = ij9f instanceof Function;return _u14k = _u14k || {}, gv3fyr('warning'), gv3fyr('error'), gv3fyr('fatalError'), wabt6;
}function n_ao3e28() {
  this['cdata'] = !0x1;
}function n_yj9qip(jiyvg, mznlx) {
  mznlx['lineNumber'] = jiyvg['lineNumber'], mznlx['columnNumber'] = jiyvg['columnNumber'];
}function n_oevr(fqj9yi) {
  return fqj9yi ? '\x0a@' + (fqj9yi['systemId'] || '') + '#[line:' + fqj9yi['lineNumber'] + ',col:' + fqj9yi['columnNumber'] + ']' : void 0x0;
}function n__hlmk$(oe8ar, vr8o3, fgy) {
  return 'string' == typeof oe8ar ? oe8ar['substr'](vr8o3, fgy) : oe8ar['length'] >= vr8o3 + fgy || vr8o3 ? new java['lang']['String'](oe8ar, vr8o3, fgy) + '' : oe8ar;
}function n_sn705(lnmz, kh_u) {
  lnmz['currentElement'] ? lnmz['currentElement']['appendChild'](kh_u) : lnmz['doc']['appendChild'](kh_u);
}n_p079c['prototype']['parseFromString'] = function (yfrv3, roa) {
  var _1uk$ = this['options'],
      q57p90 = new n_w62oba(),
      fjigqy = _1uk$['domBuilder'] || new n_ao3e28(),
      w6oa2b = _1uk$['errorHandler'],
      oe68a = _1uk$['locator'],
      yfgvij = _1uk$['xmlns'] || {},
      qyjigf = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return oe68a && fjigqy['setDocumentLocator'](oe68a), q57p90['errorHandler'] = n_zsxcd(w6oa2b, fjigqy, oe68a), q57p90['domBuilder'] = _1uk$['domBuilder'] || fjigqy, /\/x?html?$/['test'](roa) && (qyjigf['nbsp'] = '\u00a0', qyjigf['copy'] = '©', yfgvij[''] = 'http://www.w3.org/1999/xhtml'), yfgvij['xml'] = yfgvij['xml'] || 'http://www.w3.org/XML/1998/namespace', yfrv3 ? q57p90['parse'](yfrv3, yfgvij, qyjigf) : q57p90['errorHandler']['error']('invalid doc source'), fjigqy['doc'];
}, n_ao3e28['prototype'] = { 'startDocument': function () {
    this['doc'] = new n_fvri()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (scx, veg, vgr8, jqgf) {
    var ab2 = this['doc'],
        ea32o = ab2['createElementNS'](scx, vgr8 || veg),
        e8g3r = jqgf['length'];n_sn705(this, ea32o), this['currentElement'] = ea32o, this['locator'] && n_yj9qip(this['locator'], ea32o);for (var o3ea28 = 0x0; e8g3r > o3ea28; o3ea28++) {
      var scx = jqgf['getURI'](o3ea28),
          p7cs = jqgf['getValue'](o3ea28),
          vgr8 = jqgf['getQName'](o3ea28),
          _4$mh = ab2['createAttributeNS'](scx, vgr8);this['locator'] && n_yj9qip(jqgf['getLocator'](o3ea28), _4$mh), _4$mh['value'] = _4$mh['nodeValue'] = p7cs, ea32o['setAttributeNode'](_4$mh);
    }
  }, 'endElement': function () {
    {
      var ygfr3v = this['currentElement'];ygfr3v['tagName'];
    }this['currentElement'] = ygfr3v['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (mlxhd, s07nc) {
    var owae6 = this['doc']['createProcessingInstruction'](mlxhd, s07nc);this['locator'] && n_yj9qip(this['locator'], owae6), n_sn705(this, owae6);
  }, 'ignorableWhitespace': function () {}, 'characters': function (yfigq) {
    if (yfigq = n__hlmk$['apply'](this, arguments)) {
      if (this['cdata']) var ifj9qy = this['doc']['createCDATASection'](yfigq);else var ifj9qy = this['doc']['createTextNode'](yfigq);this['currentElement'] ? this['currentElement']['appendChild'](ifj9qy) : /^\s*$/['test'](yfigq) && this['doc']['appendChild'](ifj9qy), this['locator'] && n_yj9qip(this['locator'], ifj9qy);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (t2a6wb) {
    (this['locator'] = t2a6wb) && (t2a6wb['lineNumber'] = 0x0);
  }, 'comment': function (r8evo) {
    r8evo = n__hlmk$['apply'](this, arguments);var klhm$_ = this['doc']['createComment'](r8evo);this['locator'] && n_yj9qip(this['locator'], klhm$_), n_sn705(this, klhm$_);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (gjvfi, l_xmh, yipqj) {
    var yivrg = this['doc']['implementation'];if (yivrg && yivrg['createDocumentType']) {
      var e2o86a = yivrg['createDocumentType'](gjvfi, l_xmh, yipqj);this['locator'] && n_yj9qip(this['locator'], e2o86a), n_sn705(this, e2o86a);
    }
  }, 'warning': function (_hml$k) {
    console['warn']('[xmldom warning]\t' + _hml$k, n_oevr(this['locator']));
  }, 'error': function (b6w2o) {
    console['error']('[xmldom error]\t' + b6w2o, n_oevr(this['locator']));
  }, 'fatalError': function (ps570c) {
    throw console['error']('[xmldom fatalError]\t' + ps570c, n_oevr(this['locator'])), ps570c;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (a862oe) {
  n_ao3e28['prototype'][a862oe] = function () {
    return null;
  };
});var n_w62oba = require('./nnnSAX')['XMLReader'],
    n_fvri = exports['DOMImplementation'] = require('./nnnnDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./nnnnDOM')['XMLSerializer'], exports['DOMParser'] = n_p079c;