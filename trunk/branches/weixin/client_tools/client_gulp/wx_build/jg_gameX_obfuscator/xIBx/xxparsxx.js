var u = wx.$x;
function xcdvnju(gid4u) {
  this['options'] = gid4u || { 'locator': {} };
}function xvgun(f9uncj, smxo5z, jvdcu) {
  function wkheb0(kepb) {
    var zxm5 = f9uncj[kepb];!zxm5 && vudgn && (zxm5 = 0x2 == f9uncj['length'] ? function (rpa) {
      f9uncj(kepb, rpa);
    } : f9uncj), vgid4x[kepb] = zxm5 && function (b130kw) {
      zxm5('[xmldom ' + kepb + ']\t' + b130kw + xnvjcfu(jvdcu));
    } || function () {};
  }if (!f9uncj) {
    if (smxo5z instanceof xpa_hqe) return smxo5z;f9uncj = smxo5z;
  }var vgid4x = {},
      vudgn = f9uncj instanceof Function;return jvdcu = jvdcu || {}, wkheb0('warning'), wkheb0('error'), wkheb0('fatalError'), vgid4x;
}function xpa_hqe() {
  this['cdata'] = !0x1;
}function xv4gund(t1wk63, b31ktw) {
  b31ktw['lineNumber'] = t1wk63['lineNumber'], b31ktw['columnNumber'] = t1wk63['columnNumber'];
}function xnvjcfu(xgm4si) {
  return xgm4si ? '\x0a@' + (xgm4si['systemId'] || '') + '#[line:' + xgm4si['lineNumber'] + ',col:' + xgm4si['columnNumber'] + ']' : void 0x0;
}function xhr_pqa(_qaphe, qe_ha, ziosmx) {
  return 'string' == typeof _qaphe ? _qaphe['substr'](qe_ha, ziosmx) : _qaphe['length'] >= qe_ha + ziosmx || qe_ha ? new java['lang']['String'](_qaphe, qe_ha, ziosmx) + '' : _qaphe;
}function xw0hk(ncvud, p0bhea) {
  ncvud['currentElement'] ? ncvud['currentElement']['appendChild'](p0bhea) : ncvud['doc']['appendChild'](p0bhea);
}xcdvnju['prototype']['parseFromString'] = function (e0pkhb, g4xvid) {
  var imxsz = this['options'],
      k03bw = new xy79fl8(),
      xmos5z = imxsz['domBuilder'] || new xpa_hqe(),
      h_eaq = imxsz['errorHandler'],
      jcnd = imxsz['locator'],
      _qrpah = imxsz['xmlns'] || {},
      tkw1b3 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return jcnd && xmos5z['setDocumentLocator'](jcnd), k03bw['errorHandler'] = xvgun(h_eaq, xmos5z, jcnd), k03bw['domBuilder'] = imxsz['domBuilder'] || xmos5z, /\/x?html?$/['test'](g4xvid) && (tkw1b3['nbsp'] = '\u00a0', tkw1b3['copy'] = '©', _qrpah[''] = 'http://www.w3.org/1999/xhtml'), _qrpah['xml'] = _qrpah['xml'] || 'http://www.w3.org/XML/1998/namespace', e0pkhb ? k03bw['parse'](e0pkhb, _qrpah, tkw1b3) : k03bw['errorHandler']['error']('invalid doc source'), xmos5z['doc'];
}, xpa_hqe['prototype'] = { 'startDocument': function () {
    this['doc'] = new x$y897l()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (nvcd, kt1w6, jcu9f, hbwk0) {
    var hkp0 = this['doc'],
        ioz = hkp0['createElementNS'](nvcd, jcu9f || kt1w6),
        szmio = hbwk0['length'];xw0hk(this, ioz), this['currentElement'] = ioz, this['locator'] && xv4gund(this['locator'], ioz);for (var ngujdv = 0x0; szmio > ngujdv; ngujdv++) {
      var nvcd = hbwk0['getURI'](ngujdv),
          b0k1 = hbwk0['getValue'](ngujdv),
          jcu9f = hbwk0['getQName'](ngujdv),
          rphq_a = hkp0['createAttributeNS'](nvcd, jcu9f);this['locator'] && xv4gund(hbwk0['getLocator'](ngujdv), rphq_a), rphq_a['value'] = rphq_a['nodeValue'] = b0k1, ioz['setAttributeNode'](rphq_a);
    }
  }, 'endElement': function () {
    {
      var gi4msx = this['currentElement'];gi4msx['tagName'];
    }this['currentElement'] = gi4msx['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (cdjvun, igu4) {
    var fjcln9 = this['doc']['createProcessingInstruction'](cdjvun, igu4);this['locator'] && xv4gund(this['locator'], fjcln9), xw0hk(this, fjcln9);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ph_ae) {
    if (ph_ae = xhr_pqa['apply'](this, arguments)) {
      if (this['cdata']) var vufcnj = this['doc']['createCDATASection'](ph_ae);else var vufcnj = this['doc']['createTextNode'](ph_ae);this['currentElement'] ? this['currentElement']['appendChild'](vufcnj) : /^\s*$/['test'](ph_ae) && this['doc']['appendChild'](vufcnj), this['locator'] && xv4gund(this['locator'], vufcnj);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (aprq) {
    (this['locator'] = aprq) && (aprq['lineNumber'] = 0x0);
  }, 'comment': function (hbk0p) {
    hbk0p = xhr_pqa['apply'](this, arguments);var hwbek0 = this['doc']['createComment'](hbk0p);this['locator'] && xv4gund(this['locator'], hwbek0), xw0hk(this, hwbek0);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ivgx4, t623w1, im4xg) {
    var dv4ui = this['doc']['implementation'];if (dv4ui && dv4ui['createDocumentType']) {
      var ew1b = dv4ui['createDocumentType'](ivgx4, t623w1, im4xg);this['locator'] && xv4gund(this['locator'], ew1b), xw0hk(this, ew1b);
    }
  }, 'warning': function (j9lcfn) {
    console['warn']('[xmldom warning]\t' + j9lcfn, xnvjcfu(this['locator']));
  }, 'error': function (jvndc) {
    console['error']('[xmldom error]\t' + jvndc, xnvjcfu(this['locator']));
  }, 'fatalError': function (wbeh0k) {
    throw console['error']('[xmldom fatalError]\t' + wbeh0k, xnvjcfu(this['locator'])), wbeh0k;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (migx4s) {
  xpa_hqe['prototype'][migx4s] = function () {
    return null;
  };
});var xy79fl8 = require('./xxqxx')['XMLReader'],
    x$y897l = exports['DOMImplementation'] = require('./xxDOxx')['DOMImplementation'];exports['XMLSerializer'] = require('./xxDOxx')['XMLSerializer'], exports['DOMParser'] = xcdvnju;