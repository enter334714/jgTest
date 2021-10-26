var k = wx.$f;
function favqpt5(yjcfw6) {
  this['options'] = yjcfw6 || { 'locator': {} };
}function ftds81(jny604, qvaup5, amhe9u) {
  function y40n(exh7) {
    var b0nr = jny604[exh7];!b0nr && zxeh7m && (b0nr = 0x2 == jny604['length'] ? function (rbki_3) {
      jny604(exh7, rbki_3);
    } : jny604), mxhe7z[exh7] = b0nr && function (jn6y0) {
      b0nr('[xmldom ' + exh7 + ']\t' + jn6y0 + ftsdp(amhe9u));
    } || function () {};
  }if (!jny604) {
    if (qvaup5 instanceof fua59qp) return qvaup5;jny604 = qvaup5;
  }var mxhe7z = {},
      zxeh7m = jny604 instanceof Function;return amhe9u = amhe9u || {}, y40n('warning'), y40n('error'), y40n('fatalError'), mxhe7z;
}function fua59qp() {
  this['cdata'] = !0x1;
}function fx9u(vdpqst, j6y4) {
  j6y4['lineNumber'] = vdpqst['lineNumber'], j6y4['columnNumber'] = vdpqst['columnNumber'];
}function ftsdp(a95eu) {
  return a95eu ? '\x0a@' + (a95eu['systemId'] || '') + '#[line:' + a95eu['lineNumber'] + ',col:' + a95eu['columnNumber'] + ']' : void 0x0;
}function favt5(wcyj, euam5, au9qp) {
  return 'string' == typeof wcyj ? wcyj['substr'](euam5, au9qp) : wcyj['length'] >= euam5 + au9qp || euam5 ? new java['lang']['String'](wcyj, euam5, au9qp) + '' : wcyj;
}function fw2c18(y06r, sv2tdp) {
  y06r['currentElement'] ? y06r['currentElement']['appendChild'](sv2tdp) : y06r['doc']['appendChild'](sv2tdp);
}favqpt5['prototype']['parseFromString'] = function (nb40_r, yn604j) {
  var tvpaq = this['options'],
      rnikb_ = new fny0j4(),
      _rn0b4 = tvpaq['domBuilder'] || new fua59qp(),
      ibk_r3 = tvpaq['errorHandler'],
      bri_ = tvpaq['locator'],
      c6f1w = tvpaq['xmlns'] || {},
      r4b_i = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return bri_ && _rn0b4['setDocumentLocator'](bri_), rnikb_['errorHandler'] = ftds81(ibk_r3, _rn0b4, bri_), rnikb_['domBuilder'] = tvpaq['domBuilder'] || _rn0b4, /\/x?html?$/['test'](yn604j) && (r4b_i['nbsp'] = '\u00a0', r4b_i['copy'] = '©', c6f1w[''] = 'http://www.w3.org/1999/xhtml'), c6f1w['xml'] = c6f1w['xml'] || 'http://www.w3.org/XML/1998/namespace', nb40_r ? rnikb_['parse'](nb40_r, c6f1w, r4b_i) : rnikb_['errorHandler']['error']('invalid doc source'), _rn0b4['doc'];
}, fua59qp['prototype'] = { 'startDocument': function () {
    this['doc'] = new femx7()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (j1f8cw, rbki_, n40br_, qpt5vd) {
    var em9u5 = this['doc'],
        zhem7x = em9u5['createElementNS'](j1f8cw, n40br_ || rbki_),
        fw8s12 = qpt5vd['length'];fw2c18(this, zhem7x), this['currentElement'] = zhem7x, this['locator'] && fx9u(this['locator'], zhem7x);for (var vpq5ta = 0x0; fw8s12 > vpq5ta; vpq5ta++) {
      var j1f8cw = qpt5vd['getURI'](vpq5ta),
          sqvd = qpt5vd['getValue'](vpq5ta),
          n40br_ = qpt5vd['getQName'](vpq5ta),
          w1s82 = em9u5['createAttributeNS'](j1f8cw, n40br_);this['locator'] && fx9u(qpt5vd['getLocator'](vpq5ta), w1s82), w1s82['value'] = w1s82['nodeValue'] = sqvd, zhem7x['setAttributeNode'](w1s82);
    }
  }, 'endElement': function () {
    {
      var y46jc0 = this['currentElement'];y46jc0['tagName'];
    }this['currentElement'] = y46jc0['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (jf1c8, j60wyc) {
    var gik$3 = this['doc']['createProcessingInstruction'](jf1c8, j60wyc);this['locator'] && fx9u(this['locator'], gik$3), fw2c18(this, gik$3);
  }, 'ignorableWhitespace': function () {}, 'characters': function (kb$o) {
    if (kb$o = favt5['apply'](this, arguments)) {
      if (this['cdata']) var xm9eu = this['doc']['createCDATASection'](kb$o);else var xm9eu = this['doc']['createTextNode'](kb$o);this['currentElement'] ? this['currentElement']['appendChild'](xm9eu) : /^\s*$/['test'](kb$o) && this['doc']['appendChild'](xm9eu), this['locator'] && fx9u(this['locator'], xm9eu);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ink_b) {
    (this['locator'] = ink_b) && (ink_b['lineNumber'] = 0x0);
  }, 'comment': function (am59ue) {
    am59ue = favt5['apply'](this, arguments);var fjw18c = this['doc']['createComment'](am59ue);this['locator'] && fx9u(this['locator'], fjw18c), fw2c18(this, fjw18c);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (krinb, uex9, ywj60c) {
    var tdvs2p = this['doc']['implementation'];if (tdvs2p && tdvs2p['createDocumentType']) {
      var vp2dst = tdvs2p['createDocumentType'](krinb, uex9, ywj60c);this['locator'] && fx9u(this['locator'], vp2dst), fw2c18(this, vp2dst);
    }
  }, 'warning': function (f82d) {
    console['warn']('[xmldom warning]\t' + f82d, ftsdp(this['locator']));
  }, 'error': function (k3bir_) {
    console['error']('[xmldom error]\t' + k3bir_, ftsdp(this['locator']));
  }, 'fatalError': function (o3bi$) {
    throw console['error']('[xmldom fatalError]\t' + o3bi$, ftsdp(this['locator'])), o3bi$;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (oig$3) {
  fua59qp['prototype'][oig$3] = function () {
    return null;
  };
});var fny0j4 = require('./fffsax')['XMLReader'],
    femx7 = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = favqpt5;