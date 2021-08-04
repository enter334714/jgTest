var p = wx.$h;
function a_qomlp(zxyvwt) {
  this['options'] = zxyvwt || { 'locator': {} };
}function a_pomqnl(onljkm, efbd, dfihe) {
  function trpsv(cfedab) {
    var molkpn = onljkm[cfedab];!molkpn && pomkn && (molkpn = 0x2 == onljkm['length'] ? function (vsqtrp) {
      onljkm(cfedab, vsqtrp);
    } : onljkm), mjlo[cfedab] = molkpn ? function (yw$_) {
      molkpn('[xmldom ' + cfedab + ']\t' + yw$_ + a_onrpqs(dfihe));
    } : function () {};
  }if (!onljkm) {
    if (efbd instanceof a_tsroq) return efbd;onljkm = efbd;
  }var mjlo = {},
      pomkn = onljkm instanceof Function;return dfihe = dfihe || {}, trpsv('warning'), trpsv('error'), trpsv('fatalError'), mjlo;
}function a_tsroq() {
  this['cdata'] = !0x1;
}function a_deighf(xtyvz, hgcedf) {
  hgcedf['lineNumber'] = xtyvz['lineNumber'], hgcedf['columnNumber'] = xtyvz['columnNumber'];
}function a_onrpqs(pmorqn) {
  return pmorqn ? '\x0a@' + (pmorqn['systemId'] || '') + '#[line:' + pmorqn['lineNumber'] + ',col:' + pmorqn['columnNumber'] + ']' : void 0x0;
}function a_iefhgd(lgjikh, mrqpon, jghfei) {
  return 'string' == typeof lgjikh ? lgjikh['substr'](mrqpon, jghfei) : lgjikh['length'] >= mrqpon + jghfei || mrqpon ? new java['lang']['String'](lgjikh, mrqpon, jghfei) + '' : lgjikh;
}function a_$z01_(spnq, svwtx) {
  (spnq['currentElement'] || spnq['doc'])['appendChild'](svwtx);
}a_qomlp['prototype']['parseFromString'] = function (cfeba, ystw) {
  var $zy1_0 = this['options'],
      lnpmok = new a_jghie(),
      pvt = $zy1_0['domBuilder'] || new a_tsroq(),
      _13$2 = $zy1_0['errorHandler'],
      yz_0 = $zy1_0['locator'],
      adebc = $zy1_0['xmlns'] || {},
      zyxvw$ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return yz_0 && pvt['setDocumentLocator'](yz_0), lnpmok['errorHandler'] = a_pomqnl(_13$2, pvt, yz_0), lnpmok['domBuilder'] = $zy1_0['domBuilder'] || pvt, /\/x?html?$/['test'](ystw) && (zyxvw$['nbsp'] = '\u00a0', zyxvw$['copy'] = '©', adebc[''] = 'http://www.w3.org/1999/xhtml'), adebc['xml'] = adebc['xml'] || 'http://www.w3.org/XML/1998/namespace', cfeba ? lnpmok['parse'](cfeba, adebc, zyxvw$) : lnpmok['errorHandler']['error']('invalid doc source'), pvt['doc'];
}, a_tsroq['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_lknmi()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (egdhi, z_102, sorpq, gihe) {
    var cfegbd = this['doc'],
        yvxzt = cfegbd['createElementNS'](egdhi, sorpq || z_102),
        _04312 = gihe['length'];a_$z01_(this, yvxzt), this['currentElement'] = yvxzt, this['locator'] && a_deighf(this['locator'], yvxzt);for (var cebf = 0x0; cebf < _04312; cebf++) {
      var egdhi = gihe['getURI'](cebf),
          prqto = gihe['getValue'](cebf),
          sorpq = gihe['getQName'](cebf),
          likmn = cfegbd['createAttributeNS'](egdhi, sorpq);this['locator'] && a_deighf(gihe['getLocator'](cebf), likmn), likmn['value'] = likmn['nodeValue'] = prqto, yvxzt['setAttributeNode'](likmn);
    }
  }, 'endElement': function () {
    var hcdgef = this['currentElement'];hcdgef['tagName'], this['currentElement'] = hcdgef['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (cdeab, dbaecf) {
    dbaecf = this['doc']['createProcessingInstruction'](cdeab, dbaecf), (this['locator'] && a_deighf(this['locator'], dbaecf), a_$z01_(this, dbaecf));
  }, 'ignorableWhitespace': function () {}, 'characters': function (xvy$zw) {
    var z$wvyx;(xvy$zw = a_iefhgd['apply'](this, arguments)) && (z$wvyx = this['cdata'] ? this['doc']['createCDATASection'](xvy$zw) : this['doc']['createTextNode'](xvy$zw), this['currentElement'] ? this['currentElement']['appendChild'](z$wvyx) : /^\s*$/['test'](xvy$zw) && this['doc']['appendChild'](z$wvyx), this['locator'] && a_deighf(this['locator'], z$wvyx));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (gkjlh) {
    (this['locator'] = gkjlh) && (gkjlh['lineNumber'] = 0x0);
  }, 'comment': function (ifhkgj) {
    ifhkgj = a_iefhgd['apply'](this, arguments);var hdegcf = this['doc']['createComment'](ifhkgj);this['locator'] && a_deighf(this['locator'], hdegcf), a_$z01_(this, hdegcf);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (vsrtxw, yx0$_z, jkhfig) {
    var ywvt = this['doc']['implementation'];ywvt && ywvt['createDocumentType'] && (jkhfig = ywvt['createDocumentType'](vsrtxw, yx0$_z, jkhfig), this['locator'] && a_deighf(this['locator'], jkhfig), a_$z01_(this, jkhfig));
  }, 'warning': function (twyz) {
    console['warn']('[xmldom warning]\t' + twyz, a_onrpqs(this['locator']));
  }, 'error': function (zv$y) {
    console['error']('[xmldom error]\t' + zv$y, a_onrpqs(this['locator']));
  }, 'fatalError': function (gefdhi) {
    throw console['error']('[xmldom fatalError]\t' + gefdhi, a_onrpqs(this['locator'])), gefdhi;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (fhdieg) {
  a_tsroq['prototype'][fhdieg] = function () {
    return null;
  };
});var a_jghie = require('./cccsax')['XMLReader'],
    a_lknmi = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_qomlp;