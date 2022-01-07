var M = wx.$T;
function ttl2c4(dc9v$) {
  this['options'] = dc9v$ || { 'locator': {} };
}function tagrjb(vc$di, rjagn, $iv9) {
  function yox0q(hm_y0) {
    var mw6_h = vc$di[hm_y0];!mw6_h && ex0qo7 && (mw6_h = 0x2 == vc$di['length'] ? function (ox0e) {
      vc$di(hm_y0, ox0e);
    } : vc$di), dpz$fv[hm_y0] = mw6_h && function (o0xe) {
      mw6_h('[xmldom ' + hm_y0 + ']\t' + o0xe + tw_56m($iv9));
    } || function () {};
  }if (!vc$di) {
    if (rjagn instanceof twm_yh) return rjagn;vc$di = rjagn;
  }var dpz$fv = {},
      ex0qo7 = vc$di instanceof Function;return $iv9 = $iv9 || {}, yox0q('warning'), yox0q('error'), yox0q('fatalError'), dpz$fv;
}function twm_yh() {
  this['cdata'] = !0x1;
}function tjragn(subajk, nb3rg) {
  nb3rg['lineNumber'] = subajk['lineNumber'], nb3rg['columnNumber'] = subajk['columnNumber'];
}function tw_56m(qmx0_y) {
  return qmx0_y ? '\x0a@' + (qmx0_y['systemId'] || '') + '#[line:' + qmx0_y['lineNumber'] + ',col:' + qmx0_y['columnNumber'] + ']' : void 0x0;
}function tr3g1n(wh_m56, jg83n, y0xoe) {
  return 'string' == typeof wh_m56 ? wh_m56['substr'](jg83n, y0xoe) : wh_m56['length'] >= jg83n + y0xoe || jg83n ? new java['lang']['String'](wh_m56, jg83n, y0xoe) + '' : wh_m56;
}function tmw_xhy(w5318, arjn) {
  w5318['currentElement'] ? w5318['currentElement']['appendChild'](arjn) : w5318['doc']['appendChild'](arjn);
}ttl2c4['prototype']['parseFromString'] = function (xoye, t$9c) {
  var w_65h = this['options'],
      o7fep = new tqe0z7(),
      rn3jg8 = w_65h['domBuilder'] || new twm_yh(),
      fp7zd$ = w_65h['errorHandler'],
      i9t$v = w_65h['locator'],
      eopzf7 = w_65h['xmlns'] || {},
      rkgabj = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return i9t$v && rn3jg8['setDocumentLocator'](i9t$v), o7fep['errorHandler'] = tagrjb(fp7zd$, rn3jg8, i9t$v), o7fep['domBuilder'] = w_65h['domBuilder'] || rn3jg8, /\/x?html?$/['test'](t$9c) && (rkgabj['nbsp'] = '\u00a0', rkgabj['copy'] = '©', eopzf7[''] = 'http://www.w3.org/1999/xhtml'), eopzf7['xml'] = eopzf7['xml'] || 'http://www.w3.org/XML/1998/namespace', xoye ? o7fep['parse'](xoye, eopzf7, rkgabj) : o7fep['errorHandler']['error']('invalid doc source'), rn3jg8['doc'];
}, twm_yh['prototype'] = { 'startDocument': function () {
    this['doc'] = new tgnr813()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ng8, fozpe, sakjbu, div$9p) {
    var w5h_ym = this['doc'],
        jn8gr3 = w5h_ym['createElementNS'](ng8, sakjbu || fozpe),
        w36518 = div$9p['length'];tmw_xhy(this, jn8gr3), this['currentElement'] = jn8gr3, this['locator'] && tjragn(this['locator'], jn8gr3);for (var bgk = 0x0; w36518 > bgk; bgk++) {
      var ng8 = div$9p['getURI'](bgk),
          absjkr = div$9p['getValue'](bgk),
          sakjbu = div$9p['getQName'](bgk),
          yh5mw = w5h_ym['createAttributeNS'](ng8, sakjbu);this['locator'] && tjragn(div$9p['getLocator'](bgk), yh5mw), yh5mw['value'] = yh5mw['nodeValue'] = absjkr, jn8gr3['setAttributeNode'](yh5mw);
    }
  }, 'endElement': function () {
    {
      var xym_q0 = this['currentElement'];xym_q0['tagName'];
    }this['currentElement'] = xym_q0['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (tvi29c, rngaj) {
    var eqx7 = this['doc']['createProcessingInstruction'](tvi29c, rngaj);this['locator'] && tjragn(this['locator'], eqx7), tmw_xhy(this, eqx7);
  }, 'ignorableWhitespace': function () {}, 'characters': function (vp9f$d) {
    if (vp9f$d = tr3g1n['apply'](this, arguments)) {
      if (this['cdata']) var hx_ = this['doc']['createCDATASection'](vp9f$d);else var hx_ = this['doc']['createTextNode'](vp9f$d);this['currentElement'] ? this['currentElement']['appendChild'](hx_) : /^\s*$/['test'](vp9f$d) && this['doc']['appendChild'](hx_), this['locator'] && tjragn(this['locator'], hx_);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (najrbg) {
    (this['locator'] = najrbg) && (najrbg['lineNumber'] = 0x0);
  }, 'comment': function (z0oq) {
    z0oq = tr3g1n['apply'](this, arguments);var gbrnaj = this['doc']['createComment'](z0oq);this['locator'] && tjragn(this['locator'], gbrnaj), tmw_xhy(this, gbrnaj);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (v9cit$, feqzo, v9f$pd) {
    var efp = this['doc']['implementation'];if (efp && efp['createDocumentType']) {
      var dciv = efp['createDocumentType'](v9cit$, feqzo, v9f$pd);this['locator'] && tjragn(this['locator'], dciv), tmw_xhy(this, dciv);
    }
  }, 'warning': function (sajkbu) {
    console['warn']('[xmldom warning]\t' + sajkbu, tw_56m(this['locator']));
  }, 'error': function (p$vdi) {
    console['error']('[xmldom error]\t' + p$vdi, tw_56m(this['locator']));
  }, 'fatalError': function (w8531) {
    throw console['error']('[xmldom fatalError]\t' + w8531, tw_56m(this['locator'])), w8531;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (bujask) {
  twm_yh['prototype'][bujask] = function () {
    return null;
  };
});var tqe0z7 = require('./tT12tt')['XMLReader'],
    tgnr813 = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = ttl2c4;