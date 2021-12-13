var o = wx.$U;
function uepsu(moliq) {
  this['options'] = moliq || { 'locator': {} };
}function uv$snue($sn_vk, fpeu$s, mloiqh) {
  function q7lxio(rc0a) {
    var hojimq = $sn_vk[rc0a];!hojimq && s$kvn && (hojimq = 0x2 == $sn_vk['length'] ? function (tzd925) {
      $sn_vk(rc0a, tzd925);
    } : $sn_vk), vk$_ns[rc0a] = hojimq && function (mjhoiq) {
      hojimq('[xmldom ' + rc0a + ']\t' + mjhoiq + uju4p3f(mloiqh));
    } || function () {};
  }if (!$sn_vk) {
    if (fpeu$s instanceof ur8b) return fpeu$s;$sn_vk = fpeu$s;
  }var vk$_ns = {},
      s$kvn = $sn_vk instanceof Function;return mloiqh = mloiqh || {}, q7lxio('warning'), q7lxio('error'), q7lxio('fatalError'), vk$_ns;
}function ur8b() {
  this['cdata'] = !0x1;
}function umloix(cv6ka_, $usv) {
  $usv['lineNumber'] = cv6ka_['lineNumber'], $usv['columnNumber'] = cv6ka_['columnNumber'];
}function uju4p3f(hmijoq) {
  return hmijoq ? '\x0a@' + (hmijoq['systemId'] || '') + '#[line:' + hmijoq['lineNumber'] + ',col:' + hmijoq['columnNumber'] + ']' : void 0x0;
}function upeuf34(mhji34, x97zgw, d5z2t9) {
  return 'string' == typeof mhji34 ? mhji34['substr'](x97zgw, d5z2t9) : mhji34['length'] >= x97zgw + d5z2t9 || x97zgw ? new java['lang']['String'](mhji34, x97zgw, d5z2t9) + '' : mhji34;
}function uj3pu(lomihq, _ka6vn) {
  lomihq['currentElement'] ? lomihq['currentElement']['appendChild'](_ka6vn) : lomihq['doc']['appendChild'](_ka6vn);
}uepsu['prototype']['parseFromString'] = function (oih3mj, wz97xg) {
  var ixlq7o = this['options'],
      h3oijm = new uy0rb1(),
      k_v$s = ixlq7o['domBuilder'] || new ur8b(),
      hp3m = ixlq7o['errorHandler'],
      xwz9g = ixlq7o['locator'],
      v$sk_ = ixlq7o['xmlns'] || {},
      jmqiho = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return xwz9g && k_v$s['setDocumentLocator'](xwz9g), h3oijm['errorHandler'] = uv$snue(hp3m, k_v$s, xwz9g), h3oijm['domBuilder'] = ixlq7o['domBuilder'] || k_v$s, /\/x?html?$/['test'](wz97xg) && (jmqiho['nbsp'] = '\u00a0', jmqiho['copy'] = '©', v$sk_[''] = 'http://www.w3.org/1999/xhtml'), v$sk_['xml'] = v$sk_['xml'] || 'http://www.w3.org/XML/1998/namespace', oih3mj ? h3oijm['parse'](oih3mj, v$sk_, jmqiho) : h3oijm['errorHandler']['error']('invalid doc source'), k_v$s['doc'];
}, ur8b['prototype'] = { 'startDocument': function () {
    this['doc'] = new use$fu()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (gtdz9, qohilm, c108br, xql7) {
    var r68c10 = this['doc'],
        nusfe$ = r68c10['createElementNS'](gtdz9, c108br || qohilm),
        dz7w9 = xql7['length'];uj3pu(this, nusfe$), this['currentElement'] = nusfe$, this['locator'] && umloix(this['locator'], nusfe$);for (var x9wgz7 = 0x0; dz7w9 > x9wgz7; x9wgz7++) {
      var gtdz9 = xql7['getURI'](x9wgz7),
          hmjo = xql7['getValue'](x9wgz7),
          c108br = xql7['getQName'](x9wgz7),
          l7oqw = r68c10['createAttributeNS'](gtdz9, c108br);this['locator'] && umloix(xql7['getLocator'](x9wgz7), l7oqw), l7oqw['value'] = l7oqw['nodeValue'] = hmjo, nusfe$['setAttributeNode'](l7oqw);
    }
  }, 'endElement': function () {
    {
      var w9dg7 = this['currentElement'];w9dg7['tagName'];
    }this['currentElement'] = w9dg7['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (d5z29, nkv$_) {
    var h3omij = this['doc']['createProcessingInstruction'](d5z29, nkv$_);this['locator'] && umloix(this['locator'], h3omij), uj3pu(this, h3omij);
  }, 'ignorableWhitespace': function () {}, 'characters': function (kn_va) {
    if (kn_va = upeuf34['apply'](this, arguments)) {
      if (this['cdata']) var p3uj = this['doc']['createCDATASection'](kn_va);else var p3uj = this['doc']['createTextNode'](kn_va);this['currentElement'] ? this['currentElement']['appendChild'](p3uj) : /^\s*$/['test'](kn_va) && this['doc']['appendChild'](p3uj), this['locator'] && umloix(this['locator'], p3uj);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (vkn6_) {
    (this['locator'] = vkn6_) && (vkn6_['lineNumber'] = 0x0);
  }, 'comment': function (f3p4j) {
    f3p4j = upeuf34['apply'](this, arguments);var gl7xqw = this['doc']['createComment'](f3p4j);this['locator'] && umloix(this['locator'], gl7xqw), uj3pu(this, gl7xqw);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (w79gz, td5, ztd295) {
    var _kc6va = this['doc']['implementation'];if (_kc6va && _kc6va['createDocumentType']) {
      var iomhj3 = _kc6va['createDocumentType'](w79gz, td5, ztd295);this['locator'] && umloix(this['locator'], iomhj3), uj3pu(this, iomhj3);
    }
  }, 'warning': function (qhliom) {
    console['warn']('[xmldom warning]\t' + qhliom, uju4p3f(this['locator']));
  }, 'error': function (nes_v$) {
    console['error']('[xmldom error]\t' + nes_v$, uju4p3f(this['locator']));
  }, 'fatalError': function (jhpm4) {
    throw console['error']('[xmldom fatalError]\t' + jhpm4, uju4p3f(this['locator'])), jhpm4;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (vne$s) {
  ur8b['prototype'][vne$s] = function () {
    return null;
  };
});var uy0rb1 = require('./uu12uu')['XMLReader'],
    use$fu = exports['DOMImplementation'] = require('./uuDOuu')['DOMImplementation'];exports['XMLSerializer'] = require('./uuDOuu')['XMLSerializer'], exports['DOMParser'] = uepsu;