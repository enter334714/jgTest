var B = wx.$z;
function zdbyko8(r_2u58) {
  this['options'] = r_2u58 || { 'locator': {} };
}function zg149p(vl4n6, aestzx, b8drk) {
  function p1xsh(i37mq) {
    var kdztyo = vl4n6[i37mq];!kdztyo && q7im$3 && (kdztyo = 0x2 == vl4n6['length'] ? function (y8obkd) {
      vl4n6(i37mq, y8obkd);
    } : vl4n6), xeztas[i37mq] = kdztyo && function (pg19xh) {
      kdztyo('[xmldom ' + i37mq + ']\t' + pg19xh + zesxa9z(b8drk));
    } || function () {};
  }if (!vl4n6) {
    if (aestzx instanceof ziml7) return aestzx;vl4n6 = aestzx;
  }var xeztas = {},
      q7im$3 = vl4n6 instanceof Function;return b8drk = b8drk || {}, p1xsh('warning'), p1xsh('error'), p1xsh('fatalError'), xeztas;
}function ziml7() {
  this['cdata'] = !0x1;
}function zg1ph9(glf4, lfn76) {
  lfn76['lineNumber'] = glf4['lineNumber'], lfn76['columnNumber'] = glf4['columnNumber'];
}function zesxa9z(ztokyd) {
  return ztokyd ? '\x0a@' + (ztokyd['systemId'] || '') + '#[line:' + ztokyd['lineNumber'] + ',col:' + ztokyd['columnNumber'] + ']' : void 0x0;
}function zbk8(x1as9h, vgpf6, il7nfv) {
  return 'string' == typeof x1as9h ? x1as9h['substr'](vgpf6, il7nfv) : x1as9h['length'] >= vgpf6 + il7nfv || vgpf6 ? new java['lang']['String'](x1as9h, vgpf6, il7nfv) + '' : x1as9h;
}function zvlf6n(y8dok, q$3mij) {
  y8dok['currentElement'] ? y8dok['currentElement']['appendChild'](q$3mij) : y8dok['doc']['appendChild'](q$3mij);
}zdbyko8['prototype']['parseFromString'] = function (vmln7, _2u5wr) {
  var g6fvp = this['options'],
      s9xea1 = new zn7ivml(),
      y_b8rk = g6fvp['domBuilder'] || new ziml7(),
      ji$m3 = g6fvp['errorHandler'],
      _82ur = g6fvp['locator'],
      tdyokz = g6fvp['xmlns'] || {},
      nv76f = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return _82ur && y_b8rk['setDocumentLocator'](_82ur), s9xea1['errorHandler'] = zg149p(ji$m3, y_b8rk, _82ur), s9xea1['domBuilder'] = g6fvp['domBuilder'] || y_b8rk, /\/x?html?$/['test'](_2u5wr) && (nv76f['nbsp'] = '\u00a0', nv76f['copy'] = '©', tdyokz[''] = 'http://www.w3.org/1999/xhtml'), tdyokz['xml'] = tdyokz['xml'] || 'http://www.w3.org/XML/1998/namespace', vmln7 ? s9xea1['parse'](vmln7, tdyokz, nv76f) : s9xea1['errorHandler']['error']('invalid doc source'), y_b8rk['doc'];
}, ziml7['prototype'] = { 'startDocument': function () {
    this['doc'] = new zh6gp()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (atseo, f4pg6h, s9xa1e, x1e9a) {
    var _r8y = this['doc'],
        vilmn7 = _r8y['createElementNS'](atseo, s9xa1e || f4pg6h),
        iqjm$3 = x1e9a['length'];zvlf6n(this, vilmn7), this['currentElement'] = vilmn7, this['locator'] && zg1ph9(this['locator'], vilmn7);for (var as1xh9 = 0x0; iqjm$3 > as1xh9; as1xh9++) {
      var atseo = x1e9a['getURI'](as1xh9),
          l6fv4g = x1e9a['getValue'](as1xh9),
          s9xa1e = x1e9a['getQName'](as1xh9),
          miq7$3 = _r8y['createAttributeNS'](atseo, s9xa1e);this['locator'] && zg1ph9(x1e9a['getLocator'](as1xh9), miq7$3), miq7$3['value'] = miq7$3['nodeValue'] = l6fv4g, vilmn7['setAttributeNode'](miq7$3);
    }
  }, 'endElement': function () {
    {
      var esa19x = this['currentElement'];esa19x['tagName'];
    }this['currentElement'] = esa19x['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (zxaets, i$jqm) {
    var l7inf = this['doc']['createProcessingInstruction'](zxaets, i$jqm);this['locator'] && zg1ph9(this['locator'], l7inf), zvlf6n(this, l7inf);
  }, 'ignorableWhitespace': function () {}, 'characters': function (lnfv7) {
    if (lnfv7 = zbk8['apply'](this, arguments)) {
      if (this['cdata']) var bkd8y = this['doc']['createCDATASection'](lnfv7);else var bkd8y = this['doc']['createTextNode'](lnfv7);this['currentElement'] ? this['currentElement']['appendChild'](bkd8y) : /^\s*$/['test'](lnfv7) && this['doc']['appendChild'](bkd8y), this['locator'] && zg1ph9(this['locator'], bkd8y);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (g1hx9p) {
    (this['locator'] = g1hx9p) && (g1hx9p['lineNumber'] = 0x0);
  }, 'comment': function (jq3i) {
    jq3i = zbk8['apply'](this, arguments);var nqim = this['doc']['createComment'](jq3i);this['locator'] && zg1ph9(this['locator'], nqim), zvlf6n(this, nqim);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (taexz, h4fp, f46hp) {
    var p461h = this['doc']['implementation'];if (p461h && p461h['createDocumentType']) {
      var j3iqm = p461h['createDocumentType'](taexz, h4fp, f46hp);this['locator'] && zg1ph9(this['locator'], j3iqm), zvlf6n(this, j3iqm);
    }
  }, 'warning': function (kdb8y) {
    console['warn']('[xmldom warning]\t' + kdb8y, zesxa9z(this['locator']));
  }, 'error': function (fvp64) {
    console['error']('[xmldom error]\t' + fvp64, zesxa9z(this['locator']));
  }, 'fatalError': function (b8k_r5) {
    throw console['error']('[xmldom fatalError]\t' + b8k_r5, zesxa9z(this['locator'])), b8k_r5;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (bykdo8) {
  ziml7['prototype'][bykdo8] = function () {
    return null;
  };
});var zn7ivml = require('./zzczz')['XMLReader'],
    zh6gp = exports['DOMImplementation'] = require('./zzDOzz')['DOMImplementation'];exports['XMLSerializer'] = require('./zzDOzz')['XMLSerializer'], exports['DOMParser'] = zdbyko8;