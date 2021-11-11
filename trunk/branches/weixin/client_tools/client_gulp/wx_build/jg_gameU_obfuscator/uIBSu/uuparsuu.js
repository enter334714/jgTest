var o = wx.$U;
function uv$neus(p4hjf3) {
  this['options'] = p4hjf3 || { 'locator': {} };
}function ueu3p4(t9gd5, $f4up, v_en) {
  function zdgt95(ue$svn) {
    var a6_ckv = t9gd5[ue$svn];!a6_ckv && vsen$u && (a6_ckv = 0x2 == t9gd5['length'] ? function (loxq7) {
      t9gd5(ue$svn, loxq7);
    } : t9gd5), x7l[ue$svn] = a6_ckv && function (ij3ho) {
      a6_ckv('[xmldom ' + ue$svn + ']\t' + ij3ho + utzd259(v_en));
    } || function () {};
  }if (!t9gd5) {
    if ($f4up instanceof uqxwlo7) return $f4up;t9gd5 = $f4up;
  }var x7l = {},
      vsen$u = t9gd5 instanceof Function;return v_en = v_en || {}, zdgt95('warning'), zdgt95('error'), zdgt95('fatalError'), x7l;
}function uqxwlo7() {
  this['cdata'] = !0x1;
}function uxq7wlg(z59w, gwl9x) {
  gwl9x['lineNumber'] = z59w['lineNumber'], gwl9x['columnNumber'] = z59w['columnNumber'];
}function utzd259(ks_$) {
  return ks_$ ? '\x0a@' + (ks_$['systemId'] || '') + '#[line:' + ks_$['lineNumber'] + ',col:' + ks_$['columnNumber'] + ']' : void 0x0;
}function umi34hj(ca0k6, loxw7, ns_ve$) {
  return 'string' == typeof ca0k6 ? ca0k6['substr'](loxw7, ns_ve$) : ca0k6['length'] >= loxw7 + ns_ve$ || loxw7 ? new java['lang']['String'](ca0k6, loxw7, ns_ve$) + '' : ca0k6;
}function umojqh(j4fp3u, dzt92) {
  j4fp3u['currentElement'] ? j4fp3u['currentElement']['appendChild'](dzt92) : j4fp3u['doc']['appendChild'](dzt92);
}uv$neus['prototype']['parseFromString'] = function (h3i4m, cr68a) {
  var $n_kv = this['options'],
      sne$uf = new uzxw7g9(),
      sn$ufe = $n_kv['domBuilder'] || new uqxwlo7(),
      wql7xg = $n_kv['errorHandler'],
      gdt5z9 = $n_kv['locator'],
      nuev$ = $n_kv['xmlns'] || {},
      cv = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return gdt5z9 && sn$ufe['setDocumentLocator'](gdt5z9), sne$uf['errorHandler'] = ueu3p4(wql7xg, sn$ufe, gdt5z9), sne$uf['domBuilder'] = $n_kv['domBuilder'] || sn$ufe, /\/x?html?$/['test'](cr68a) && (cv['nbsp'] = '\u00a0', cv['copy'] = '©', nuev$[''] = 'http://www.w3.org/1999/xhtml'), nuev$['xml'] = nuev$['xml'] || 'http://www.w3.org/XML/1998/namespace', h3i4m ? sne$uf['parse'](h3i4m, nuev$, cv) : sne$uf['errorHandler']['error']('invalid doc source'), sn$ufe['doc'];
}, uqxwlo7['prototype'] = { 'startDocument': function () {
    this['doc'] = new un_av()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ev, u4ep3f, u34epf, dzt952) {
    var p4ufe = this['doc'],
        q7wgl = p4ufe['createElementNS'](ev, u34epf || u4ep3f),
        l7ioq = dzt952['length'];umojqh(this, q7wgl), this['currentElement'] = q7wgl, this['locator'] && uxq7wlg(this['locator'], q7wgl);for (var bc0r8 = 0x0; l7ioq > bc0r8; bc0r8++) {
      var ev = dzt952['getURI'](bc0r8),
          z5dgw = dzt952['getValue'](bc0r8),
          u34epf = dzt952['getQName'](bc0r8),
          w59dz = p4ufe['createAttributeNS'](ev, u34epf);this['locator'] && uxq7wlg(dzt952['getLocator'](bc0r8), w59dz), w59dz['value'] = w59dz['nodeValue'] = z5dgw, q7wgl['setAttributeNode'](w59dz);
    }
  }, 'endElement': function () {
    {
      var vs$_nk = this['currentElement'];vs$_nk['tagName'];
    }this['currentElement'] = vs$_nk['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (iolmhq, tzd59g) {
    var h3f = this['doc']['createProcessingInstruction'](iolmhq, tzd59g);this['locator'] && uxq7wlg(this['locator'], h3f), umojqh(this, h3f);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ns$v_k) {
    if (ns$v_k = umi34hj['apply'](this, arguments)) {
      if (this['cdata']) var xwgl9 = this['doc']['createCDATASection'](ns$v_k);else var xwgl9 = this['doc']['createTextNode'](ns$v_k);this['currentElement'] ? this['currentElement']['appendChild'](xwgl9) : /^\s*$/['test'](ns$v_k) && this['doc']['appendChild'](xwgl9), this['locator'] && uxq7wlg(this['locator'], xwgl9);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (f4pju) {
    (this['locator'] = f4pju) && (f4pju['lineNumber'] = 0x0);
  }, 'comment': function (a6cv_) {
    a6cv_ = umi34hj['apply'](this, arguments);var mh3oj = this['doc']['createComment'](a6cv_);this['locator'] && uxq7wlg(this['locator'], mh3oj), umojqh(this, mh3oj);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (olqmih, oxliqm, xg7l) {
    var f34jhp = this['doc']['implementation'];if (f34jhp && f34jhp['createDocumentType']) {
      var d5gtz = f34jhp['createDocumentType'](olqmih, oxliqm, xg7l);this['locator'] && uxq7wlg(this['locator'], d5gtz), umojqh(this, d5gtz);
    }
  }, 'warning': function (rb1c08) {
    console['warn']('[xmldom warning]\t' + rb1c08, utzd259(this['locator']));
  }, 'error': function ($4upe) {
    console['error']('[xmldom error]\t' + $4upe, utzd259(this['locator']));
  }, 'fatalError': function (qixmo) {
    throw console['error']('[xmldom fatalError]\t' + qixmo, utzd259(this['locator'])), qixmo;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (zgdw79) {
  uqxwlo7['prototype'][zgdw79] = function () {
    return null;
  };
});var uzxw7g9 = require('./uu12uu')['XMLReader'],
    un_av = exports['DOMImplementation'] = require('./uuDOuu')['DOMImplementation'];exports['XMLSerializer'] = require('./uuDOuu')['XMLSerializer'], exports['DOMParser'] = uv$neus;