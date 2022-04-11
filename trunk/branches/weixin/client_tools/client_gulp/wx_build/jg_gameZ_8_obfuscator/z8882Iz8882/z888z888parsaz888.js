var G = wx.$G;
function azsnmbt(ems$) {
  this['options'] = ems$ || { 'locator': {} };
}function adokf(a7vk6, q_re3$, rn_szm) {
  function l$e(l7863q) {
    var ix2th = a7vk6[l7863q];!ix2th && qe8_$3 && (ix2th = 0x2 == a7vk6['length'] ? function (nxitb) {
      a7vk6(l7863q, nxitb);
    } : a7vk6), zstnb[l7863q] = ix2th && function (l36v8) {
      ix2th('[xmldom ' + l7863q + ']\t' + l36v8 + a_m$zr(rn_szm));
    } || function () {};
  }if (!a7vk6) {
    if (q_re3$ instanceof ayitbhx) return q_re3$;a7vk6 = q_re3$;
  }var zstnb = {},
      qe8_$3 = a7vk6 instanceof Function;return rn_szm = rn_szm || {}, l$e('warning'), l$e('error'), l$e('fatalError'), zstnb;
}function ayitbhx() {
  this['cdata'] = !0x1;
}function ayh2cj(l6vk, zsmb) {
  zsmb['lineNumber'] = l6vk['lineNumber'], zsmb['columnNumber'] = l6vk['columnNumber'];
}function a_m$zr(ithxy2) {
  return ithxy2 ? '\x0a@' + (ithxy2['systemId'] || '') + '#[line:' + ithxy2['lineNumber'] + ',col:' + ithxy2['columnNumber'] + ']' : void 0x0;
}function aic2hx($erm, ythix, me$s_) {
  return 'string' == typeof $erm ? $erm['substr'](ythix, me$s_) : $erm['length'] >= ythix + me$s_ || ythix ? new java['lang']['String']($erm, ythix, me$s_) + '' : $erm;
}function au5df4(z_nmrs, q863l) {
  z_nmrs['currentElement'] ? z_nmrs['currentElement']['appendChild'](q863l) : z_nmrs['doc']['appendChild'](q863l);
}azsnmbt['prototype']['parseFromString'] = function (r_eq$, ow4d1u) {
  var $mse_r = this['options'],
      puow = new anrzmb(),
      w1upo0 = $mse_r['domBuilder'] || new ayitbhx(),
      esrm_$ = $mse_r['errorHandler'],
      rnz = $mse_r['locator'],
      l7va = $mse_r['xmlns'] || {},
      $lqe = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return rnz && w1upo0['setDocumentLocator'](rnz), puow['errorHandler'] = adokf(esrm_$, w1upo0, rnz), puow['domBuilder'] = $mse_r['domBuilder'] || w1upo0, /\/x?html?$/['test'](ow4d1u) && ($lqe['nbsp'] = '\u00a0', $lqe['copy'] = '©', l7va[''] = 'http://www.w3.org/1999/xhtml'), l7va['xml'] = l7va['xml'] || 'http://www.w3.org/XML/1998/namespace', r_eq$ ? puow['parse'](r_eq$, l7va, $lqe) : puow['errorHandler']['error']('invalid doc source'), w1upo0['doc'];
}, ayitbhx['prototype'] = { 'startDocument': function () {
    this['doc'] = new aic2()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (x2iht, hjc, daf4, m$zs_) {
    var upow1 = this['doc'],
        s$erq = upow1['createElementNS'](x2iht, daf4 || hjc),
        mznrb = m$zs_['length'];au5df4(this, s$erq), this['currentElement'] = s$erq, this['locator'] && ayh2cj(this['locator'], s$erq);for (var _q3r = 0x0; mznrb > _q3r; _q3r++) {
      var x2iht = m$zs_['getURI'](_q3r),
          dk4a5f = m$zs_['getValue'](_q3r),
          daf4 = m$zs_['getQName'](_q3r),
          $s_zrm = upow1['createAttributeNS'](x2iht, daf4);this['locator'] && ayh2cj(m$zs_['getLocator'](_q3r), $s_zrm), $s_zrm['value'] = $s_zrm['nodeValue'] = dk4a5f, s$erq['setAttributeNode']($s_zrm);
    }
  }, 'endElement': function () {
    {
      var hi2xy = this['currentElement'];hi2xy['tagName'];
    }this['currentElement'] = hi2xy['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (vk76la, srm_$e) {
    var $_rse = this['doc']['createProcessingInstruction'](vk76la, srm_$e);this['locator'] && ayh2cj(this['locator'], $_rse), au5df4(this, $_rse);
  }, 'ignorableWhitespace': function () {}, 'characters': function (a5kdf4) {
    if (a5kdf4 = aic2hx['apply'](this, arguments)) {
      if (this['cdata']) var f45vka = this['doc']['createCDATASection'](a5kdf4);else var f45vka = this['doc']['createTextNode'](a5kdf4);this['currentElement'] ? this['currentElement']['appendChild'](f45vka) : /^\s*$/['test'](a5kdf4) && this['doc']['appendChild'](f45vka), this['locator'] && ayh2cj(this['locator'], f45vka);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (_rqe3$) {
    (this['locator'] = _rqe3$) && (_rqe3$['lineNumber'] = 0x0);
  }, 'comment': function (xhybit) {
    xhybit = aic2hx['apply'](this, arguments);var qe86l = this['doc']['createComment'](xhybit);this['locator'] && ayh2cj(this['locator'], qe86l), au5df4(this, qe86l);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (fa4k, kvf57a, _zrmsn) {
    var mnbx = this['doc']['implementation'];if (mnbx && mnbx['createDocumentType']) {
      var es$qr = mnbx['createDocumentType'](fa4k, kvf57a, _zrmsn);this['locator'] && ayh2cj(this['locator'], es$qr), au5df4(this, es$qr);
    }
  }, 'warning': function (tyxbih) {
    console['warn']('[xmldom warning]\t' + tyxbih, a_m$zr(this['locator']));
  }, 'error': function (v4ak) {
    console['error']('[xmldom error]\t' + v4ak, a_m$zr(this['locator']));
  }, 'fatalError': function (m_zn) {
    throw console['error']('[xmldom fatalError]\t' + m_zn, a_m$zr(this['locator'])), m_zn;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (tbmzns) {
  ayitbhx['prototype'][tbmzns] = function () {
    return null;
  };
});var anrzmb = require('./z888z888cz888z888')['XMLReader'],
    aic2 = exports['DOMImplementation'] = require('./z888z888DOz888z888')['DOMImplementation'];exports['XMLSerializer'] = require('./z888z888DOz888z888')['XMLSerializer'], exports['DOMParser'] = azsnmbt;