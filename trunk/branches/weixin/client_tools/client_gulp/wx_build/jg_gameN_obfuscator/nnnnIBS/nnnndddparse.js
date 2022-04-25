var A = wx.$N;
function n_ol30ze(cksiv) {
  this['options'] = cksiv || { 'locator': {} };
}function n_y43eo(t1g7c5, cg17sx, lz3oe0) {
  function e3zlo(nj0m) {
    var mn_8h = t1g7c5[nj0m];!mn_8h && ftgd75 && (mn_8h = 0x2 == t1g7c5['length'] ? function ($9qrbw) {
      t1g7c5(nj0m, $9qrbw);
    } : t1g7c5), qryz94[nj0m] = mn_8h && function (zor4y9) {
      mn_8h('[xmldom ' + nj0m + ']\t' + zor4y9 + n_t751(lz3oe0));
    } || function () {};
  }if (!t1g7c5) {
    if (cg17sx instanceof n_zy49rq) return cg17sx;t1g7c5 = cg17sx;
  }var qryz94 = {},
      ftgd75 = t1g7c5 instanceof Function;return lz3oe0 = lz3oe0 || {}, e3zlo('warning'), e3zlo('error'), e3zlo('fatalError'), qryz94;
}function n_zy49rq() {
  this['cdata'] = !0x1;
}function n_e0mn(u8hf, fg7) {
  fg7['lineNumber'] = u8hf['lineNumber'], fg7['columnNumber'] = u8hf['columnNumber'];
}function n_t751(yzloe3) {
  return yzloe3 ? '\x0a@' + (yzloe3['systemId'] || '') + '#[line:' + yzloe3['lineNumber'] + ',col:' + yzloe3['columnNumber'] + ']' : void 0x0;
}function n_m0ulnj(pvsk2i, b9$q6w, dfh7t) {
  return 'string' == typeof pvsk2i ? pvsk2i['substr'](b9$q6w, dfh7t) : pvsk2i['length'] >= b9$q6w + dfh7t || b9$q6w ? new java['lang']['String'](pvsk2i, b9$q6w, dfh7t) + '' : pvsk2i;
}function n_o4y9r(qw96$, jml0un) {
  qw96$['currentElement'] ? qw96$['currentElement']['appendChild'](jml0un) : qw96$['doc']['appendChild'](jml0un);
}n_ol30ze['prototype']['parseFromString'] = function (kpvsi, ix2kv) {
  var xcis = this['options'],
      ryqz49 = new n_gd5f(),
      njmul = xcis['domBuilder'] || new n_zy49rq(),
      kvp2 = xcis['errorHandler'],
      j8_umn = xcis['locator'],
      q$9r = xcis['xmlns'] || {},
      m8_uh = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return j8_umn && njmul['setDocumentLocator'](j8_umn), ryqz49['errorHandler'] = n_y43eo(kvp2, njmul, j8_umn), ryqz49['domBuilder'] = xcis['domBuilder'] || njmul, /\/x?html?$/['test'](ix2kv) && (m8_uh['nbsp'] = '\u00a0', m8_uh['copy'] = '©', q$9r[''] = 'http://www.w3.org/1999/xhtml'), q$9r['xml'] = q$9r['xml'] || 'http://www.w3.org/XML/1998/namespace', kpvsi ? ryqz49['parse'](kpvsi, q$9r, m8_uh) : ryqz49['errorHandler']['error']('invalid doc source'), njmul['doc'];
}, n_zy49rq['prototype'] = { 'startDocument': function () {
    this['doc'] = new n_t71d5()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (spk2i, y3lzoe, wqa$6, w6$qba) {
    var qyr94z = this['doc'],
        gdf57 = qyr94z['createElementNS'](spk2i, wqa$6 || y3lzoe),
        sck1vx = w6$qba['length'];n_o4y9r(this, gdf57), this['currentElement'] = gdf57, this['locator'] && n_e0mn(this['locator'], gdf57);for (var $rw9bq = 0x0; sck1vx > $rw9bq; $rw9bq++) {
      var spk2i = w6$qba['getURI']($rw9bq),
          gc75 = w6$qba['getValue']($rw9bq),
          wqa$6 = w6$qba['getQName']($rw9bq),
          n0u_m = qyr94z['createAttributeNS'](spk2i, wqa$6);this['locator'] && n_e0mn(w6$qba['getLocator']($rw9bq), n0u_m), n0u_m['value'] = n0u_m['nodeValue'] = gc75, gdf57['setAttributeNode'](n0u_m);
    }
  }, 'endElement': function () {
    {
      var gcxv1s = this['currentElement'];gcxv1s['tagName'];
    }this['currentElement'] = gcxv1s['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (vi2sx, w9qb6$) {
    var td8_fh = this['doc']['createProcessingInstruction'](vi2sx, w9qb6$);this['locator'] && n_e0mn(this['locator'], td8_fh), n_o4y9r(this, td8_fh);
  }, 'ignorableWhitespace': function () {}, 'characters': function (gc15t7) {
    if (gc15t7 = n_m0ulnj['apply'](this, arguments)) {
      if (this['cdata']) var zy34or = this['doc']['createCDATASection'](gc15t7);else var zy34or = this['doc']['createTextNode'](gc15t7);this['currentElement'] ? this['currentElement']['appendChild'](zy34or) : /^\s*$/['test'](gc15t7) && this['doc']['appendChild'](zy34or), this['locator'] && n_e0mn(this['locator'], zy34or);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (zl3e0o) {
    (this['locator'] = zl3e0o) && (zl3e0o['lineNumber'] = 0x0);
  }, 'comment': function (sxkicv) {
    sxkicv = n_m0ulnj['apply'](this, arguments);var cx = this['doc']['createComment'](sxkicv);this['locator'] && n_e0mn(this['locator'], cx), n_o4y9r(this, cx);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (zy3oe, t75dh, ckixs) {
    var c1ksx = this['doc']['implementation'];if (c1ksx && c1ksx['createDocumentType']) {
      var yzlo3e = c1ksx['createDocumentType'](zy3oe, t75dh, ckixs);this['locator'] && n_e0mn(this['locator'], yzlo3e), n_o4y9r(this, yzlo3e);
    }
  }, 'warning': function (o3e0j) {
    console['warn']('[xmldom warning]\t' + o3e0j, n_t751(this['locator']));
  }, 'error': function (th58df) {
    console['error']('[xmldom error]\t' + th58df, n_t751(this['locator']));
  }, 'fatalError': function (le0oj) {
    throw console['error']('[xmldom fatalError]\t' + le0oj, n_t751(this['locator'])), le0oj;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (l30ze) {
  n_zy49rq['prototype'][l30ze] = function () {
    return null;
  };
});var n_gd5f = require('./nnnSAX')['XMLReader'],
    n_t71d5 = exports['DOMImplementation'] = require('./nnnnDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./nnnnDOM')['XMLSerializer'], exports['DOMParser'] = n_ol30ze;