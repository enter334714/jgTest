var v = wx.$d;
function zhn1kjft(z6e3au_) {
  this['options'] = z6e3au_ || { 'locator': {} };
}function zijfkr1(tezf1n, j1hfnkt, eaz6o_u) {
  function x2l0v8(e63zn_u) {
    var paog$m = tezf1n[e63zn_u];!paog$m && c749w && (paog$m = 0x2 == tezf1n['length'] ? function (za_eou) {
      tezf1n(e63zn_u, za_eou);
    } : tezf1n), mp$y7gb[e63zn_u] = paog$m ? function (ih1kr) {
      paog$m('[xmldom ' + e63zn_u + ']\t' + ih1kr + zeu36nz(eaz6o_u));
    } : function () {};
  }if (!tezf1n) {
    if (j1hfnkt instanceof zm$gb7op) return j1hfnkt;tezf1n = j1hfnkt;
  }var mp$y7gb = {},
      c749w = tezf1n instanceof Function;return eaz6o_u = eaz6o_u || {}, x2l0v8('warning'), x2l0v8('error'), x2l0v8('fatalError'), mp$y7gb;
}function zm$gb7op() {
  this['cdata'] = !0x1;
}function zz36nt(e_6n3, tznef1) {
  tznef1['lineNumber'] = e_6n3['lineNumber'], tznef1['columnNumber'] = e_6n3['columnNumber'];
}function zeu36nz(tznef3) {
  return tznef3 ? '\x0a@' + (tznef3['systemId'] || '') + '#[line:' + tznef3['lineNumber'] + ',col:' + tznef3['columnNumber'] + ']' : void 0x0;
}function zfjtrkh1(hjn1t, goa$mpb, qvx08) {
  return 'string' == typeof hjn1t ? hjn1t['substr'](goa$mpb, qvx08) : hjn1t['length'] >= goa$mpb + qvx08 || goa$mpb ? new java['lang']['String'](hjn1t, goa$mpb, qvx08) + '' : hjn1t;
}function zune3z6(wy79c54, amo$gp) {
  (wy79c54['currentElement'] || wy79c54['doc'])['appendChild'](amo$gp);
}zhn1kjft['prototype']['parseFromString'] = function (yw597gp, jtfz13n) {
  var uzn6 = this['options'],
      z3u_6n = new zuaobm$_(),
      y759cpw = uzn6['domBuilder'] || new zm$gb7op(),
      kf31j = uzn6['errorHandler'],
      l28c45x = uzn6['locator'],
      b$7mopg = uzn6['xmlns'] || {},
      njt1hfk = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return l28c45x && y759cpw['setDocumentLocator'](l28c45x), z3u_6n['errorHandler'] = zijfkr1(kf31j, y759cpw, l28c45x), z3u_6n['domBuilder'] = uzn6['domBuilder'] || y759cpw, /\/x?html?$/['test'](jtfz13n) && (njt1hfk['nbsp'] = '\u00a0', njt1hfk['copy'] = '©', b$7mopg[''] = 'http://www.w3.org/1999/xhtml'), b$7mopg['xml'] = b$7mopg['xml'] || 'http://www.w3.org/XML/1998/namespace', yw597gp ? z3u_6n['parse'](yw597gp, b$7mopg, njt1hfk) : z3u_6n['errorHandler']['error']('invalid doc source'), y759cpw['doc'];
}, zm$gb7op['prototype'] = { 'startDocument': function () {
    this['doc'] = new zhnftjk1()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (c259, w9gym7p, ifrjh, v8d0qx2) {
    var bo_$6a = this['doc'],
        xl8c452 = bo_$6a['createElementNS'](c259, ifrjh || w9gym7p),
        e36_zu = v8d0qx2['length'];zune3z6(this, xl8c452), this['currentElement'] = xl8c452, this['locator'] && zz36nt(this['locator'], xl8c452);for (var ef3tn = 0x0; ef3tn < e36_zu; ef3tn++) {
      var c259 = v8d0qx2['getURI'](ef3tn),
          khntfj = v8d0qx2['getValue'](ef3tn),
          ifrjh = v8d0qx2['getQName'](ef3tn),
          a_mb$uo = bo_$6a['createAttributeNS'](c259, ifrjh);this['locator'] && zz36nt(v8d0qx2['getLocator'](ef3tn), a_mb$uo), a_mb$uo['value'] = a_mb$uo['nodeValue'] = khntfj, xl8c452['setAttributeNode'](a_mb$uo);
    }
  }, 'endElement': function () {
    var agbmpo$ = this['currentElement'];agbmpo$['tagName'], this['currentElement'] = agbmpo$['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (hj1kft, p7gbym) {
    p7gbym = this['doc']['createProcessingInstruction'](hj1kft, p7gbym), (this['locator'] && zz36nt(this['locator'], p7gbym), zune3z6(this, p7gbym));
  }, 'ignorableWhitespace': function () {}, 'characters': function (g9p7w5) {
    var c842xl;(g9p7w5 = zfjtrkh1['apply'](this, arguments)) && (c842xl = this['cdata'] ? this['doc']['createCDATASection'](g9p7w5) : this['doc']['createTextNode'](g9p7w5), this['currentElement'] ? this['currentElement']['appendChild'](c842xl) : /^\s*$/['test'](g9p7w5) && this['doc']['appendChild'](c842xl), this['locator'] && zz36nt(this['locator'], c842xl));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ab$_uom) {
    (this['locator'] = ab$_uom) && (ab$_uom['lineNumber'] = 0x0);
  }, 'comment': function (b$6_ou) {
    b$6_ou = zfjtrkh1['apply'](this, arguments);var $o6u_ae = this['doc']['createComment'](b$6_ou);this['locator'] && zz36nt(this['locator'], $o6u_ae), zune3z6(this, $o6u_ae);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (a_ue$6, ao6_uz, _ezaou) {
    var mg$pb7 = this['doc']['implementation'];mg$pb7 && mg$pb7['createDocumentType'] && (_ezaou = mg$pb7['createDocumentType'](a_ue$6, ao6_uz, _ezaou), this['locator'] && zz36nt(this['locator'], _ezaou), zune3z6(this, _ezaou));
  }, 'warning': function (_n63) {
    console['warn']('[xmldom warning]\t' + _n63, zeu36nz(this['locator']));
  }, 'error': function (n_6zue) {
    console['error']('[xmldom error]\t' + n_6zue, zeu36nz(this['locator']));
  }, 'fatalError': function (c7y94w5) {
    throw console['error']('[xmldom fatalError]\t' + c7y94w5, zeu36nz(this['locator'])), c7y94w5;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (tjfkh) {
  zm$gb7op['prototype'][tjfkh] = function () {
    return null;
  };
});var zuaobm$_ = require('./dddsax')['XMLReader'],
    zhnftjk1 = exports['DOMImplementation'] = require('./ddddom')['DOMImplementation'];exports['XMLSerializer'] = require('./ddddom')['XMLSerializer'], exports['DOMParser'] = zhn1kjft;