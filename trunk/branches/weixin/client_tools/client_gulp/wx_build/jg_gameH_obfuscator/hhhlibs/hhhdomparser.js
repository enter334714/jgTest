var O = wx.$C;
function h_yn_avs(sgn_vf) {
  this['options'] = sgn_vf || { 'locator': {} };
}function h_fng_sv(aei2, hw9z, n_yas6) {
  function t5clmo(biy6a2) {
    var _4f3 = aei2[biy6a2];!_4f3 && ay26n && (_4f3 = 0x2 == aei2['length'] ? function (c$ulp5) {
      aei2(biy6a2, c$ulp5);
    } : aei2), _vnysg[biy6a2] = _4f3 && function (ya6i2s) {
      _4f3('[xmldom ' + biy6a2 + ']\t' + ya6i2s + h_cp5olu(n_yas6));
    } || function () {};
  }if (!aei2) {
    if (hw9z instanceof h_upcl$5) return hw9z;aei2 = hw9z;
  }var _vnysg = {},
      ay26n = aei2 instanceof Function;return n_yas6 = n_yas6 || {}, t5clmo('warning'), t5clmo('error'), t5clmo('fatalError'), _vnysg;
}function h_upcl$5() {
  this['cdata'] = !0x1;
}function h_fnsvg(f137q, h0dj9) {
  h0dj9['lineNumber'] = f137q['lineNumber'], h0dj9['columnNumber'] = f137q['columnNumber'];
}function h_cp5olu(z8rj$9) {
  return z8rj$9 ? '\x0a@' + (z8rj$9['systemId'] || '') + '#[line:' + z8rj$9['lineNumber'] + ',col:' + z8rj$9['columnNumber'] + ']' : void 0x0;
}function h_$89zur(pct5lo, b26aie, r$89zu) {
  return 'string' == typeof pct5lo ? pct5lo['substr'](b26aie, r$89zu) : pct5lo['length'] >= b26aie + r$89zu || b26aie ? new java['lang']['String'](pct5lo, b26aie, r$89zu) + '' : pct5lo;
}function h_a2ny(vyg_ns, u9$z8) {
  vyg_ns['currentElement'] ? vyg_ns['currentElement']['appendChild'](u9$z8) : vyg_ns['doc']['appendChild'](u9$z8);
}h_yn_avs['prototype']['parseFromString'] = function (v_4g3, whd9jz) {
  var yais6 = this['options'],
      ktl5mo = new h_xhw0(),
      pr8uc$ = yais6['domBuilder'] || new h_upcl$5(),
      wq7h = yais6['errorHandler'],
      $lp5u = yais6['locator'],
      v_nasy = yais6['xmlns'] || {},
      ng4_fv = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return $lp5u && pr8uc$['setDocumentLocator']($lp5u), ktl5mo['errorHandler'] = h_fng_sv(wq7h, pr8uc$, $lp5u), ktl5mo['domBuilder'] = yais6['domBuilder'] || pr8uc$, /\/x?html?$/['test'](whd9jz) && (ng4_fv['nbsp'] = '\u00a0', ng4_fv['copy'] = '©', v_nasy[''] = 'http://www.w3.org/1999/xhtml'), v_nasy['xml'] = v_nasy['xml'] || 'http://www.w3.org/XML/1998/namespace', v_4g3 ? ktl5mo['parse'](v_4g3, v_nasy, ng4_fv) : ktl5mo['errorHandler']['error']('invalid doc source'), pr8uc$['doc'];
}, h_upcl$5['prototype'] = { 'startDocument': function () {
    this['doc'] = new h_gfv3()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (pu$5cl, a62b, cu$l5, dqxw) {
    var tomcl = this['doc'],
        z98ur = tomcl['createElementNS'](pu$5cl, cu$l5 || a62b),
        ucp8l$ = dqxw['length'];h_a2ny(this, z98ur), this['currentElement'] = z98ur, this['locator'] && h_fnsvg(this['locator'], z98ur);for (var lc5opt = 0x0; ucp8l$ > lc5opt; lc5opt++) {
      var pu$5cl = dqxw['getURI'](lc5opt),
          ngs_yv = dqxw['getValue'](lc5opt),
          cu$l5 = dqxw['getQName'](lc5opt),
          o5lpu = tomcl['createAttributeNS'](pu$5cl, cu$l5);this['locator'] && h_fnsvg(dqxw['getLocator'](lc5opt), o5lpu), o5lpu['value'] = o5lpu['nodeValue'] = ngs_yv, z98ur['setAttributeNode'](o5lpu);
    }
  }, 'endElement': function () {
    {
      var q0371 = this['currentElement'];q0371['tagName'];
    }this['currentElement'] = q0371['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (s_nfv, puc$8l) {
    var g3vf = this['doc']['createProcessingInstruction'](s_nfv, puc$8l);this['locator'] && h_fnsvg(this['locator'], g3vf), h_a2ny(this, g3vf);
  }, 'ignorableWhitespace': function () {}, 'characters': function (jdw0) {
    if (jdw0 = h_$89zur['apply'](this, arguments)) {
      if (this['cdata']) var pcl5 = this['doc']['createCDATASection'](jdw0);else var pcl5 = this['doc']['createTextNode'](jdw0);this['currentElement'] ? this['currentElement']['appendChild'](pcl5) : /^\s*$/['test'](jdw0) && this['doc']['appendChild'](pcl5), this['locator'] && h_fnsvg(this['locator'], pcl5);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (wh90j) {
    (this['locator'] = wh90j) && (wh90j['lineNumber'] = 0x0);
  }, 'comment': function (x70wqh) {
    x70wqh = h_$89zur['apply'](this, arguments);var q34x1 = this['doc']['createComment'](x70wqh);this['locator'] && h_fnsvg(this['locator'], q34x1), h_a2ny(this, q34x1);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (jhw9, h0qd, _3gf4) {
    var c5oplu = this['doc']['implementation'];if (c5oplu && c5oplu['createDocumentType']) {
      var pcr$u = c5oplu['createDocumentType'](jhw9, h0qd, _3gf4);this['locator'] && h_fnsvg(this['locator'], pcr$u), h_a2ny(this, pcr$u);
    }
  }, 'warning': function (lokt) {
    console['warn']('[xmldom warning]\t' + lokt, h_cp5olu(this['locator']));
  }, 'error': function (vgs_n) {
    console['error']('[xmldom error]\t' + vgs_n, h_cp5olu(this['locator']));
  }, 'fatalError': function (jr9zd) {
    throw console['error']('[xmldom fatalError]\t' + jr9zd, h_cp5olu(this['locator'])), jr9zd;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (lp5cou) {
  h_upcl$5['prototype'][lp5cou] = function () {
    return null;
  };
});var h_xhw0 = require('./hhhsax')['XMLReader'],
    h_gfv3 = exports['DOMImplementation'] = require('./hhhdom')['DOMImplementation'];exports['XMLSerializer'] = require('./hhhdom')['XMLSerializer'], exports['DOMParser'] = h_yn_avs;