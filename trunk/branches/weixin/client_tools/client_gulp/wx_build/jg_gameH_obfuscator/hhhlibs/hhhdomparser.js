var O = wx.$C;
function h_qx01w(na_ys) {
  this['options'] = na_ys || { 'locator': {} };
}function h_hxq70(jdhz9, kt5lm, xwdhj) {
  function _vgsy(hd0qxw) {
    var _6aysn = jdhz9[hd0qxw];!_6aysn && l5tomc && (_6aysn = 0x2 == jdhz9['length'] ? function (hdq0xw) {
      jdhz9(hd0qxw, hdq0xw);
    } : jdhz9), lpct[hd0qxw] = _6aysn && function ($pu8c) {
      _6aysn('[xmldom ' + hd0qxw + ']\t' + $pu8c + h_gf4731(xwdhj));
    } || function () {};
  }if (!jdhz9) {
    if (kt5lm instanceof h_ny_sa6) return kt5lm;jdhz9 = kt5lm;
  }var lpct = {},
      l5tomc = jdhz9 instanceof Function;return xwdhj = xwdhj || {}, _vgsy('warning'), _vgsy('error'), _vgsy('fatalError'), lpct;
}function h_ny_sa6() {
  this['cdata'] = !0x1;
}function h_yanv(r$u8z9, aib2y6) {
  aib2y6['lineNumber'] = r$u8z9['lineNumber'], aib2y6['columnNumber'] = r$u8z9['columnNumber'];
}function h_gf4731($rz8pu) {
  return $rz8pu ? '\x0a@' + ($rz8pu['systemId'] || '') + '#[line:' + $rz8pu['lineNumber'] + ',col:' + $rz8pu['columnNumber'] + ']' : void 0x0;
}function h_rd9jz(j09whd, x0wdhj, rjh9d) {
  return 'string' == typeof j09whd ? j09whd['substr'](x0wdhj, rjh9d) : j09whd['length'] >= x0wdhj + rjh9d || x0wdhj ? new java['lang']['String'](j09whd, x0wdhj, rjh9d) + '' : j09whd;
}function h_pl5$u(olc, luc$p) {
  olc['currentElement'] ? olc['currentElement']['appendChild'](luc$p) : olc['doc']['appendChild'](luc$p);
}h_qx01w['prototype']['parseFromString'] = function (hzd9r, abi2y6) {
  var hjw9z = this['options'],
      gfn_v = new h_zj$8(),
      $c8lp = hjw9z['domBuilder'] || new h_ny_sa6(),
      nsyva = hjw9z['errorHandler'],
      p8$uc = hjw9z['locator'],
      r9$u8 = hjw9z['xmlns'] || {},
      hxw0q7 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return p8$uc && $c8lp['setDocumentLocator'](p8$uc), gfn_v['errorHandler'] = h_hxq70(nsyva, $c8lp, p8$uc), gfn_v['domBuilder'] = hjw9z['domBuilder'] || $c8lp, /\/x?html?$/['test'](abi2y6) && (hxw0q7['nbsp'] = '\u00a0', hxw0q7['copy'] = '©', r9$u8[''] = 'http://www.w3.org/1999/xhtml'), r9$u8['xml'] = r9$u8['xml'] || 'http://www.w3.org/XML/1998/namespace', hzd9r ? gfn_v['parse'](hzd9r, r9$u8, hxw0q7) : gfn_v['errorHandler']['error']('invalid doc source'), $c8lp['doc'];
}, h_ny_sa6['prototype'] = { 'startDocument': function () {
    this['doc'] = new h_pul$8()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ai62eb, _sa6y, xq710, zdwhj9) {
    var pz8ur = this['doc'],
        mo5k = pz8ur['createElementNS'](ai62eb, xq710 || _sa6y),
        q43x = zdwhj9['length'];h_pl5$u(this, mo5k), this['currentElement'] = mo5k, this['locator'] && h_yanv(this['locator'], mo5k);for (var r8u$cp = 0x0; q43x > r8u$cp; r8u$cp++) {
      var ai62eb = zdwhj9['getURI'](r8u$cp),
          _gvf34 = zdwhj9['getValue'](r8u$cp),
          xq710 = zdwhj9['getQName'](r8u$cp),
          i62ba = pz8ur['createAttributeNS'](ai62eb, xq710);this['locator'] && h_yanv(zdwhj9['getLocator'](r8u$cp), i62ba), i62ba['value'] = i62ba['nodeValue'] = _gvf34, mo5k['setAttributeNode'](i62ba);
    }
  }, 'endElement': function () {
    {
      var fq4371 = this['currentElement'];fq4371['tagName'];
    }this['currentElement'] = fq4371['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (f13vg, b2i6y) {
    var c8lp$u = this['doc']['createProcessingInstruction'](f13vg, b2i6y);this['locator'] && h_yanv(this['locator'], c8lp$u), h_pl5$u(this, c8lp$u);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_v) {
    if (_v = h_rd9jz['apply'](this, arguments)) {
      if (this['cdata']) var i2a6s = this['doc']['createCDATASection'](_v);else var i2a6s = this['doc']['createTextNode'](_v);this['currentElement'] ? this['currentElement']['appendChild'](i2a6s) : /^\s*$/['test'](_v) && this['doc']['appendChild'](i2a6s), this['locator'] && h_yanv(this['locator'], i2a6s);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (pto5cl) {
    (this['locator'] = pto5cl) && (pto5cl['lineNumber'] = 0x0);
  }, 'comment': function (f314gv) {
    f314gv = h_rd9jz['apply'](this, arguments);var t5locm = this['doc']['createComment'](f314gv);this['locator'] && h_yanv(this['locator'], t5locm), h_pl5$u(this, t5locm);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (rdj89z, _nyavs, xq307) {
    var dxwhj = this['doc']['implementation'];if (dxwhj && dxwhj['createDocumentType']) {
      var qx173 = dxwhj['createDocumentType'](rdj89z, _nyavs, xq307);this['locator'] && h_yanv(this['locator'], qx173), h_pl5$u(this, qx173);
    }
  }, 'warning': function (otmlk5) {
    console['warn']('[xmldom warning]\t' + otmlk5, h_gf4731(this['locator']));
  }, 'error': function (ng4fv_) {
    console['error']('[xmldom error]\t' + ng4fv_, h_gf4731(this['locator']));
  }, 'fatalError': function (y_sn6) {
    throw console['error']('[xmldom fatalError]\t' + y_sn6, h_gf4731(this['locator'])), y_sn6;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (nsa26y) {
  h_ny_sa6['prototype'][nsa26y] = function () {
    return null;
  };
});var h_zj$8 = require('./hhhsax')['XMLReader'],
    h_pul$8 = exports['DOMImplementation'] = require('./hhhdom')['DOMImplementation'];exports['XMLSerializer'] = require('./hhhdom')['XMLSerializer'], exports['DOMParser'] = h_qx01w;