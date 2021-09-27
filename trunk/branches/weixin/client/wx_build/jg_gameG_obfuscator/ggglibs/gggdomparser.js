var m = wx.$g;
function gdmpe0(yrf95b) {
  this['options'] = yrf95b || { 'locator': {} };
}function govtcqd(te0mdp, agjius, saujig) {
  function iasu4(h54iyu) {
    var _e0m = te0mdp[h54iyu];!_e0m && m8ped && (_e0m = 0x2 == te0mdp['length'] ? function (vdcotp) {
      te0mdp(h54iyu, vdcotp);
    } : te0mdp), us4a[h54iyu] = _e0m ? function (edm8) {
      _e0m('[xmldom ' + h54iyu + ']\t' + edm8 + gpdoetc(saujig));
    } : function () {};
  }if (!te0mdp) {
    if (agjius instanceof gkw7xr) return agjius;te0mdp = agjius;
  }var us4a = {},
      m8ped = te0mdp instanceof Function;return saujig = saujig || {}, iasu4('warning'), iasu4('error'), iasu4('fatalError'), us4a;
}function gkw7xr() {
  this['cdata'] = !0x1;
}function gua4ij(w$2x, w7xkr) {
  w7xkr['lineNumber'] = w$2x['lineNumber'], w7xkr['columnNumber'] = w$2x['columnNumber'];
}function gpdoetc(pcto) {
  return pcto ? '\x0a@' + (pcto['systemId'] || '') + '#[line:' + pcto['lineNumber'] + ',col:' + pcto['columnNumber'] + ']' : void 0x0;
}function gm8d0e(gaj61s, r7k9, r7bx) {
  return 'string' == typeof gaj61s ? gaj61s['substr'](r7k9, r7bx) : gaj61s['length'] >= r7k9 + r7bx || r7k9 ? new java['lang']['String'](gaj61s, r7k9, r7bx) + '' : gaj61s;
}function gc0dept(m8_l03, vqtd) {
  (m8_l03['currentElement'] || m8_l03['doc'])['appendChild'](vqtd);
}gdmpe0['prototype']['parseFromString'] = function (augji, kwzx$) {
  var j4a = this['options'],
      gajs1 = new gw3_z$l(),
      mp_0e = j4a['domBuilder'] || new gkw7xr(),
      de0tpc = j4a['errorHandler'],
      hu4y = j4a['locator'],
      me0td = j4a['xmlns'] || {},
      l_0m38 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return hu4y && mp_0e['setDocumentLocator'](hu4y), gajs1['errorHandler'] = govtcqd(de0tpc, mp_0e, hu4y), gajs1['domBuilder'] = j4a['domBuilder'] || mp_0e, /\/x?html?$/['test'](kwzx$) && (l_0m38['nbsp'] = '\u00a0', l_0m38['copy'] = '©', me0td[''] = 'http://www.w3.org/1999/xhtml'), me0td['xml'] = me0td['xml'] || 'http://www.w3.org/XML/1998/namespace', augji ? gajs1['parse'](augji, me0td, l_0m38) : gajs1['errorHandler']['error']('invalid doc source'), mp_0e['doc'];
}, gkw7xr['prototype'] = { 'startDocument': function () {
    this['doc'] = new gb49yh5()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_zw3$, $w2lx, dpcvto, poe) {
    var bxfrk7 = this['doc'],
        iyhsu = bxfrk7['createElementNS'](_zw3$, dpcvto || $w2lx),
        fybr = poe['length'];gc0dept(this, iyhsu), this['currentElement'] = iyhsu, this['locator'] && gua4ij(this['locator'], iyhsu);for (var m0p_e8 = 0x0; m0p_e8 < fybr; m0p_e8++) {
      var _zw3$ = poe['getURI'](m0p_e8),
          k72x$w = poe['getValue'](m0p_e8),
          dpcvto = poe['getQName'](m0p_e8),
          p_08e = bxfrk7['createAttributeNS'](_zw3$, dpcvto);this['locator'] && gua4ij(poe['getLocator'](m0p_e8), p_08e), p_08e['value'] = p_08e['nodeValue'] = k72x$w, iyhsu['setAttributeNode'](p_08e);
    }
  }, 'endElement': function () {
    var z$23w = this['currentElement'];z$23w['tagName'], this['currentElement'] = z$23w['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (tm0pe, gasij6) {
    gasij6 = this['doc']['createProcessingInstruction'](tm0pe, gasij6), (this['locator'] && gua4ij(this['locator'], gasij6), gc0dept(this, gasij6));
  }, 'ignorableWhitespace': function () {}, 'characters': function (m0dtep) {
    var i4uhsy;(m0dtep = gm8d0e['apply'](this, arguments)) && (i4uhsy = this['cdata'] ? this['doc']['createCDATASection'](m0dtep) : this['doc']['createTextNode'](m0dtep), this['currentElement'] ? this['currentElement']['appendChild'](i4uhsy) : /^\s*$/['test'](m0dtep) && this['doc']['appendChild'](i4uhsy), this['locator'] && gua4ij(this['locator'], i4uhsy));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (w23$l) {
    (this['locator'] = w23$l) && (w23$l['lineNumber'] = 0x0);
  }, 'comment': function (ptoe) {
    ptoe = gm8d0e['apply'](this, arguments);var sj1ag6 = this['doc']['createComment'](ptoe);this['locator'] && gua4ij(this['locator'], sj1ag6), gc0dept(this, sj1ag6);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (h4yu, tdocqv, js6g1a) {
    var fry59 = this['doc']['implementation'];fry59 && fry59['createDocumentType'] && (js6g1a = fry59['createDocumentType'](h4yu, tdocqv, js6g1a), this['locator'] && gua4ij(this['locator'], js6g1a), gc0dept(this, js6g1a));
  }, 'warning': function (vqdotc) {
    console['warn']('[xmldom warning]\t' + vqdotc, gpdoetc(this['locator']));
  }, 'error': function (ajgi6s) {
    console['error']('[xmldom error]\t' + ajgi6s, gpdoetc(this['locator']));
  }, 'fatalError': function (e0mdpt) {
    throw console['error']('[xmldom fatalError]\t' + e0mdpt, gpdoetc(this['locator'])), e0mdpt;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (is4j) {
  gkw7xr['prototype'][is4j] = function () {
    return null;
  };
});var gw3_z$l = require('./gggsax')['XMLReader'],
    gb49yh5 = exports['DOMImplementation'] = require('./gggdom')['DOMImplementation'];exports['XMLSerializer'] = require('./gggdom')['XMLSerializer'], exports['DOMParser'] = gdmpe0;