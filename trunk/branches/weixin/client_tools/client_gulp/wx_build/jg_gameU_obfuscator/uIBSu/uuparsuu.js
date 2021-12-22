var o = wx.$U;
function uhjmp34(r_6ca) {
  this['options'] = r_6ca || { 'locator': {} };
}function ucakr0(oqjhi, r106c, gxql7w) {
  function w7loqx(ox7l) {
    var j3fu4p = oqjhi[ox7l];!j3fu4p && lq7xg && (j3fu4p = 0x2 == oqjhi['length'] ? function (kc60ra) {
      oqjhi(ox7l, kc60ra);
    } : oqjhi), qxl7g[ox7l] = j3fu4p && function (fe3p4u) {
      j3fu4p('[xmldom ' + ox7l + ']\t' + fe3p4u + uan_6vk(gxql7w));
    } || function () {};
  }if (!oqjhi) {
    if (r106c instanceof uvse_n) return r106c;oqjhi = r106c;
  }var qxl7g = {},
      lq7xg = oqjhi instanceof Function;return gxql7w = gxql7w || {}, w7loqx('warning'), w7loqx('error'), w7loqx('fatalError'), qxl7g;
}function uvse_n() {
  this['cdata'] = !0x1;
}function uac8r0(c8a6r0, j3hmi) {
  j3hmi['lineNumber'] = c8a6r0['lineNumber'], j3hmi['columnNumber'] = c8a6r0['columnNumber'];
}function uan_6vk(ue$nfs) {
  return ue$nfs ? '\x0a@' + (ue$nfs['systemId'] || '') + '#[line:' + ue$nfs['lineNumber'] + ',col:' + ue$nfs['columnNumber'] + ']' : void 0x0;
}function uxoimql(i4h, t5d92z, xgl) {
  return 'string' == typeof i4h ? i4h['substr'](t5d92z, xgl) : i4h['length'] >= t5d92z + xgl || t5d92z ? new java['lang']['String'](i4h, t5d92z, xgl) + '' : i4h;
}function uzg7xw9(_avn6, oimq) {
  _avn6['currentElement'] ? _avn6['currentElement']['appendChild'](oimq) : _avn6['doc']['appendChild'](oimq);
}uhjmp34['prototype']['parseFromString'] = function (mh3ji, io) {
  var xl7oi = this['options'],
      ksan = new u_n$v(),
      z2t5d = xl7oi['domBuilder'] || new uvse_n(),
      dgw97 = xl7oi['errorHandler'],
      zt25d = xl7oi['locator'],
      $psf = xl7oi['xmlns'] || {},
      iomhql = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return zt25d && z2t5d['setDocumentLocator'](zt25d), ksan['errorHandler'] = ucakr0(dgw97, z2t5d, zt25d), ksan['domBuilder'] = xl7oi['domBuilder'] || z2t5d, /\/x?html?$/['test'](io) && (iomhql['nbsp'] = '\u00a0', iomhql['copy'] = '©', $psf[''] = 'http://www.w3.org/1999/xhtml'), $psf['xml'] = $psf['xml'] || 'http://www.w3.org/XML/1998/namespace', mh3ji ? ksan['parse'](mh3ji, $psf, iomhql) : ksan['errorHandler']['error']('invalid doc source'), z2t5d['doc'];
}, uvse_n['prototype'] = { 'startDocument': function () {
    this['doc'] = new ugwzd5()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (oqimh, y1rb08, jfu4, _svak) {
    var b10yr = this['doc'],
        $sveu = b10yr['createElementNS'](oqimh, jfu4 || y1rb08),
        mhi3oj = _svak['length'];uzg7xw9(this, $sveu), this['currentElement'] = $sveu, this['locator'] && uac8r0(this['locator'], $sveu);for (var hj3p4f = 0x0; mhi3oj > hj3p4f; hj3p4f++) {
      var oqimh = _svak['getURI'](hj3p4f),
          lq7oxw = _svak['getValue'](hj3p4f),
          jfu4 = _svak['getQName'](hj3p4f),
          tdz5g9 = b10yr['createAttributeNS'](oqimh, jfu4);this['locator'] && uac8r0(_svak['getLocator'](hj3p4f), tdz5g9), tdz5g9['value'] = tdz5g9['nodeValue'] = lq7oxw, $sveu['setAttributeNode'](tdz5g9);
    }
  }, 'endElement': function () {
    {
      var h43jim = this['currentElement'];h43jim['tagName'];
    }this['currentElement'] = h43jim['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ns_$e, mho3j) {
    var tz59dg = this['doc']['createProcessingInstruction'](ns_$e, mho3j);this['locator'] && uac8r0(this['locator'], tz59dg), uzg7xw9(this, tz59dg);
  }, 'ignorableWhitespace': function () {}, 'characters': function (dw5gz9) {
    if (dw5gz9 = uxoimql['apply'](this, arguments)) {
      if (this['cdata']) var $evuns = this['doc']['createCDATASection'](dw5gz9);else var $evuns = this['doc']['createTextNode'](dw5gz9);this['currentElement'] ? this['currentElement']['appendChild']($evuns) : /^\s*$/['test'](dw5gz9) && this['doc']['appendChild']($evuns), this['locator'] && uac8r0(this['locator'], $evuns);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (c816r) {
    (this['locator'] = c816r) && (c816r['lineNumber'] = 0x0);
  }, 'comment': function (byr108) {
    byr108 = uxoimql['apply'](this, arguments);var w9g7zx = this['doc']['createComment'](byr108);this['locator'] && uac8r0(this['locator'], w9g7zx), uzg7xw9(this, w9g7zx);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (dtzg59, seu$vn, xg7w9z) {
    var olw7q = this['doc']['implementation'];if (olw7q && olw7q['createDocumentType']) {
      var _vk6an = olw7q['createDocumentType'](dtzg59, seu$vn, xg7w9z);this['locator'] && uac8r0(this['locator'], _vk6an), uzg7xw9(this, _vk6an);
    }
  }, 'warning': function (uep$4) {
    console['warn']('[xmldom warning]\t' + uep$4, uan_6vk(this['locator']));
  }, 'error': function (c0rb8) {
    console['error']('[xmldom error]\t' + c0rb8, uan_6vk(this['locator']));
  }, 'fatalError': function (hjomq) {
    throw console['error']('[xmldom fatalError]\t' + hjomq, uan_6vk(this['locator'])), hjomq;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (hqjo) {
  uvse_n['prototype'][hqjo] = function () {
    return null;
  };
});var u_n$v = require('./uu12uu')['XMLReader'],
    ugwzd5 = exports['DOMImplementation'] = require('./uuDOuu')['DOMImplementation'];exports['XMLSerializer'] = require('./uuDOuu')['XMLSerializer'], exports['DOMParser'] = uhjmp34;