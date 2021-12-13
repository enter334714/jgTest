var u = wx.$x;
function xvjunf(k61wt3) {
  this['options'] = k61wt3 || { 'locator': {} };
}function xduiv4(w63t12, lc7fj9, mzoxi) {
  function y98fl(beap0h) {
    var duvnj = w63t12[beap0h];!duvnj && a0pb && (duvnj = 0x2 == w63t12['length'] ? function (w162t3) {
      w63t12(beap0h, w162t3);
    } : w63t12), zm52[beap0h] = duvnj && function (o5s) {
      duvnj('[xmldom ' + beap0h + ']\t' + o5s + xsm4igx(mzoxi));
    } || function () {};
  }if (!w63t12) {
    if (lc7fj9 instanceof xuf9cn) return lc7fj9;w63t12 = lc7fj9;
  }var zm52 = {},
      a0pb = w63t12 instanceof Function;return mzoxi = mzoxi || {}, y98fl('warning'), y98fl('error'), y98fl('fatalError'), zm52;
}function xuf9cn() {
  this['cdata'] = !0x1;
}function xfvju(uv4dng, xs4gdi) {
  xs4gdi['lineNumber'] = uv4dng['lineNumber'], xs4gdi['columnNumber'] = uv4dng['columnNumber'];
}function xsm4igx(d4vigu) {
  return d4vigu ? '\x0a@' + (d4vigu['systemId'] || '') + '#[line:' + d4vigu['lineNumber'] + ',col:' + d4vigu['columnNumber'] + ']' : void 0x0;
}function xcjnu($7ly8, k01b3, di4xsg) {
  return 'string' == typeof $7ly8 ? $7ly8['substr'](k01b3, di4xsg) : $7ly8['length'] >= k01b3 + di4xsg || k01b3 ? new java['lang']['String']($7ly8, k01b3, di4xsg) + '' : $7ly8;
}function xnujdg(pa_q, vfn) {
  pa_q['currentElement'] ? pa_q['currentElement']['appendChild'](vfn) : pa_q['doc']['appendChild'](vfn);
}xvjunf['prototype']['parseFromString'] = function (_ehap, ep_qah) {
  var _aphe = this['options'],
      _pqha = new xg4divu(),
      z2ms = _aphe['domBuilder'] || new xuf9cn(),
      nug4v = _aphe['errorHandler'],
      omzixs = _aphe['locator'],
      h0ebpa = _aphe['xmlns'] || {},
      pqra = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return omzixs && z2ms['setDocumentLocator'](omzixs), _pqha['errorHandler'] = xduiv4(nug4v, z2ms, omzixs), _pqha['domBuilder'] = _aphe['domBuilder'] || z2ms, /\/x?html?$/['test'](ep_qah) && (pqra['nbsp'] = '\u00a0', pqra['copy'] = '©', h0ebpa[''] = 'http://www.w3.org/1999/xhtml'), h0ebpa['xml'] = h0ebpa['xml'] || 'http://www.w3.org/XML/1998/namespace', _ehap ? _pqha['parse'](_ehap, h0ebpa, pqra) : _pqha['errorHandler']['error']('invalid doc source'), z2ms['doc'];
}, xuf9cn['prototype'] = { 'startDocument': function () {
    this['doc'] = new xz63t2()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (omsz5x, xis4mo, p_ahq, wkhe0) {
    var fnjc = this['doc'],
        hba0p = fnjc['createElementNS'](omsz5x, p_ahq || xis4mo),
        hqa_r = wkhe0['length'];xnujdg(this, hba0p), this['currentElement'] = hba0p, this['locator'] && xfvju(this['locator'], hba0p);for (var eahqp_ = 0x0; hqa_r > eahqp_; eahqp_++) {
      var omsz5x = wkhe0['getURI'](eahqp_),
          t23561 = wkhe0['getValue'](eahqp_),
          p_ahq = wkhe0['getQName'](eahqp_),
          ba0ep = fnjc['createAttributeNS'](omsz5x, p_ahq);this['locator'] && xfvju(wkhe0['getLocator'](eahqp_), ba0ep), ba0ep['value'] = ba0ep['nodeValue'] = t23561, hba0p['setAttributeNode'](ba0ep);
    }
  }, 'endElement': function () {
    {
      var omixs4 = this['currentElement'];omixs4['tagName'];
    }this['currentElement'] = omixs4['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (djvgnu, vdgu4i) {
    var p_ehaq = this['doc']['createProcessingInstruction'](djvgnu, vdgu4i);this['locator'] && xfvju(this['locator'], p_ehaq), xnujdg(this, p_ehaq);
  }, 'ignorableWhitespace': function () {}, 'characters': function (haqpe) {
    if (haqpe = xcjnu['apply'](this, arguments)) {
      if (this['cdata']) var vgud4n = this['doc']['createCDATASection'](haqpe);else var vgud4n = this['doc']['createTextNode'](haqpe);this['currentElement'] ? this['currentElement']['appendChild'](vgud4n) : /^\s*$/['test'](haqpe) && this['doc']['appendChild'](vgud4n), this['locator'] && xfvju(this['locator'], vgud4n);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (jduvn) {
    (this['locator'] = jduvn) && (jduvn['lineNumber'] = 0x0);
  }, 'comment': function (be0kph) {
    be0kph = xcjnu['apply'](this, arguments);var zmxiso = this['doc']['createComment'](be0kph);this['locator'] && xfvju(this['locator'], zmxiso), xnujdg(this, zmxiso);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (cnuf, ndcujv, iugd4v) {
    var nvdju = this['doc']['implementation'];if (nvdju && nvdju['createDocumentType']) {
      var bt1k3 = nvdju['createDocumentType'](cnuf, ndcujv, iugd4v);this['locator'] && xfvju(this['locator'], bt1k3), xnujdg(this, bt1k3);
    }
  }, 'warning': function (nvdcu) {
    console['warn']('[xmldom warning]\t' + nvdcu, xsm4igx(this['locator']));
  }, 'error': function (r_qap) {
    console['error']('[xmldom error]\t' + r_qap, xsm4igx(this['locator']));
  }, 'fatalError': function (l7y98) {
    throw console['error']('[xmldom fatalError]\t' + l7y98, xsm4igx(this['locator'])), l7y98;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (x5zoms) {
  xuf9cn['prototype'][x5zoms] = function () {
    return null;
  };
});var xg4divu = require('./xxqxx')['XMLReader'],
    xz63t2 = exports['DOMImplementation'] = require('./xxDOxx')['DOMImplementation'];exports['XMLSerializer'] = require('./xxDOxx')['XMLSerializer'], exports['DOMParser'] = xvjunf;