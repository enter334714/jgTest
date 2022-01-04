var u = wx.$x;
function xx4vgid(gxmsi) {
  this['options'] = gxmsi || { 'locator': {} };
}function xunf9cj(sdixg, nfjvu, peh0aq) {
  function gm4i(z3256t) {
    var dvgujn = sdixg[z3256t];!dvgujn && hpbek0 && (dvgujn = 0x2 == sdixg['length'] ? function (t253) {
      sdixg(z3256t, t253);
    } : sdixg), hk0we[z3256t] = dvgujn && function (dvxgi4) {
      dvgujn('[xmldom ' + z3256t + ']\t' + dvxgi4 + xmxz5s(peh0aq));
    } || function () {};
  }if (!sdixg) {
    if (nfjvu instanceof xjnvg) return nfjvu;sdixg = nfjvu;
  }var hk0we = {},
      hpbek0 = sdixg instanceof Function;return peh0aq = peh0aq || {}, gm4i('warning'), gm4i('error'), gm4i('fatalError'), hk0we;
}function xjnvg() {
  this['cdata'] = !0x1;
}function xlnfcj9(hep0ab, oszx5m) {
  oszx5m['lineNumber'] = hep0ab['lineNumber'], oszx5m['columnNumber'] = hep0ab['columnNumber'];
}function xmxz5s(qhrap) {
  return qhrap ? '\x0a@' + (qhrap['systemId'] || '') + '#[line:' + qhrap['lineNumber'] + ',col:' + qhrap['columnNumber'] + ']' : void 0x0;
}function xomsi4x(mi4xgs, gvxdi, nj9fcu) {
  return 'string' == typeof mi4xgs ? mi4xgs['substr'](gvxdi, nj9fcu) : mi4xgs['length'] >= gvxdi + nj9fcu || gvxdi ? new java['lang']['String'](mi4xgs, gvxdi, nj9fcu) + '' : mi4xgs;
}function xt61kw(guv4dn, haq0p) {
  guv4dn['currentElement'] ? guv4dn['currentElement']['appendChild'](haq0p) : guv4dn['doc']['appendChild'](haq0p);
}xx4vgid['prototype']['parseFromString'] = function (ufj9n, xs4imo) {
  var pb0ah = this['options'],
      vugid4 = new xosx4mi(),
      giuvd4 = pb0ah['domBuilder'] || new xjnvg(),
      hqapr = pb0ah['errorHandler'],
      ju9n = pb0ah['locator'],
      l89y7f = pb0ah['xmlns'] || {},
      nclfj9 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ju9n && giuvd4['setDocumentLocator'](ju9n), vugid4['errorHandler'] = xunf9cj(hqapr, giuvd4, ju9n), vugid4['domBuilder'] = pb0ah['domBuilder'] || giuvd4, /\/x?html?$/['test'](xs4imo) && (nclfj9['nbsp'] = '\u00a0', nclfj9['copy'] = '©', l89y7f[''] = 'http://www.w3.org/1999/xhtml'), l89y7f['xml'] = l89y7f['xml'] || 'http://www.w3.org/XML/1998/namespace', ufj9n ? vugid4['parse'](ufj9n, l89y7f, nclfj9) : vugid4['errorHandler']['error']('invalid doc source'), giuvd4['doc'];
}, xjnvg['prototype'] = { 'startDocument': function () {
    this['doc'] = new xmgi4x()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ra_ph, paqe_, kt6w3, w6kt31) {
    var uvcn = this['doc'],
        phe_qa = uvcn['createElementNS'](ra_ph, kt6w3 || paqe_),
        uid4gv = w6kt31['length'];xt61kw(this, phe_qa), this['currentElement'] = phe_qa, this['locator'] && xlnfcj9(this['locator'], phe_qa);for (var behkp = 0x0; uid4gv > behkp; behkp++) {
      var ra_ph = w6kt31['getURI'](behkp),
          oxmis = w6kt31['getValue'](behkp),
          kt6w3 = w6kt31['getQName'](behkp),
          t21635 = uvcn['createAttributeNS'](ra_ph, kt6w3);this['locator'] && xlnfcj9(w6kt31['getLocator'](behkp), t21635), t21635['value'] = t21635['nodeValue'] = oxmis, phe_qa['setAttributeNode'](t21635);
    }
  }, 'endElement': function () {
    {
      var _hapr = this['currentElement'];_hapr['tagName'];
    }this['currentElement'] = _hapr['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (rq_, jdg) {
    var bp0h = this['doc']['createProcessingInstruction'](rq_, jdg);this['locator'] && xlnfcj9(this['locator'], bp0h), xt61kw(this, bp0h);
  }, 'ignorableWhitespace': function () {}, 'characters': function ($y9l8) {
    if ($y9l8 = xomsi4x['apply'](this, arguments)) {
      if (this['cdata']) var wb3k1t = this['doc']['createCDATASection']($y9l8);else var wb3k1t = this['doc']['createTextNode']($y9l8);this['currentElement'] ? this['currentElement']['appendChild'](wb3k1t) : /^\s*$/['test']($y9l8) && this['doc']['appendChild'](wb3k1t), this['locator'] && xlnfcj9(this['locator'], wb3k1t);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (flnjc) {
    (this['locator'] = flnjc) && (flnjc['lineNumber'] = 0x0);
  }, 'comment': function (dgvnuj) {
    dgvnuj = xomsi4x['apply'](this, arguments);var ugdiv4 = this['doc']['createComment'](dgvnuj);this['locator'] && xlnfcj9(this['locator'], ugdiv4), xt61kw(this, ugdiv4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (s4oim, s5zomx, j7cf9) {
    var f9jc7 = this['doc']['implementation'];if (f9jc7 && f9jc7['createDocumentType']) {
      var vjcnud = f9jc7['createDocumentType'](s4oim, s5zomx, j7cf9);this['locator'] && xlnfcj9(this['locator'], vjcnud), xt61kw(this, vjcnud);
    }
  }, 'warning': function (z5sxo) {
    console['warn']('[xmldom warning]\t' + z5sxo, xmxz5s(this['locator']));
  }, 'error': function (s5xomz) {
    console['error']('[xmldom error]\t' + s5xomz, xmxz5s(this['locator']));
  }, 'fatalError': function (mzx5s) {
    throw console['error']('[xmldom fatalError]\t' + mzx5s, xmxz5s(this['locator'])), mzx5s;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (mzso) {
  xjnvg['prototype'][mzso] = function () {
    return null;
  };
});var xosx4mi = require('./xxqxx')['XMLReader'],
    xmgi4x = exports['DOMImplementation'] = require('./xxDOxx')['DOMImplementation'];exports['XMLSerializer'] = require('./xxDOxx')['XMLSerializer'], exports['DOMParser'] = xx4vgid;