var p = wx.$h;
function a_bfcqza(he2x8) {
  this['options'] = he2x8 || { 'locator': {} };
}function a_plq0w(ex9h8, iazb5k, fql) {
  function eok9v($j7_m1) {
    var _41j7 = ex9h8[$j7_m1];!_41j7 && a5ko && (_41j7 = 0x2 == ex9h8['length'] ? function (qw03lp) {
      ex9h8($j7_m1, qw03lp);
    } : ex9h8), x8e9vo[$j7_m1] = _41j7 ? function (qw3lfc) {
      _41j7('[xmldom ' + $j7_m1 + ']\t' + qw3lfc + a_ia5vk(fql));
    } : function () {};
  }if (!ex9h8) {
    if (iazb5k instanceof a_oe9x8h) return iazb5k;ex9h8 = iazb5k;
  }var x8e9vo = {},
      a5ko = ex9h8 instanceof Function;return fql = fql || {}, eok9v('warning'), eok9v('error'), eok9v('fatalError'), x8e9vo;
}function a_oe9x8h() {
  this['cdata'] = !0x1;
}function a_ex9vok(qfza, nj7t$) {
  nj7t$['lineNumber'] = qfza['lineNumber'], nj7t$['columnNumber'] = qfza['columnNumber'];
}function a_ia5vk(fzib5a) {
  return fzib5a ? '\x0a@' + (fzib5a['systemId'] || '') + '#[line:' + fzib5a['lineNumber'] + ',col:' + fzib5a['columnNumber'] + ']' : void 0x0;
}function a_g8h62r(e6xh2, ymp4j, i5vok9) {
  return 'string' == typeof e6xh2 ? e6xh2['substr'](ymp4j, i5vok9) : e6xh2['length'] >= ymp4j + i5vok9 || ymp4j ? new java['lang']['String'](e6xh2, ymp4j, i5vok9) + '' : e6xh2;
}function a_i9k5o(yl0p43, eh98) {
  (yl0p43['currentElement'] || yl0p43['doc'])['appendChild'](eh98);
}a_bfcqza['prototype']['parseFromString'] = function (iza5bk, y0pm) {
  var heox98 = this['options'],
      t$_jn = new a_wfcl3(),
      j_m417 = heox98['domBuilder'] || new a_oe9x8h(),
      zaibk = heox98['errorHandler'],
      ovkei = heox98['locator'],
      x6 = heox98['xmlns'] || {},
      zqflw = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ovkei && j_m417['setDocumentLocator'](ovkei), t$_jn['errorHandler'] = a_plq0w(zaibk, j_m417, ovkei), t$_jn['domBuilder'] = heox98['domBuilder'] || j_m417, /\/x?html?$/['test'](y0pm) && (zqflw['nbsp'] = '\u00a0', zqflw['copy'] = '©', x6[''] = 'http://www.w3.org/1999/xhtml'), x6['xml'] = x6['xml'] || 'http://www.w3.org/XML/1998/namespace', iza5bk ? t$_jn['parse'](iza5bk, x6, zqflw) : t$_jn['errorHandler']['error']('invalid doc source'), j_m417['doc'];
}, a_oe9x8h['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_$j_1()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (h28ex6, wpq03, pm34y0, td7$ns) {
    var fabc5z = this['doc'],
        j$t_7 = fabc5z['createElementNS'](h28ex6, pm34y0 || wpq03),
        iazk5b = td7$ns['length'];a_i9k5o(this, j$t_7), this['currentElement'] = j$t_7, this['locator'] && a_ex9vok(this['locator'], j$t_7);for (var mj_41y = 0x0; mj_41y < iazk5b; mj_41y++) {
      var h28ex6 = td7$ns['getURI'](mj_41y),
          cfzwq = td7$ns['getValue'](mj_41y),
          pm34y0 = td7$ns['getQName'](mj_41y),
          zbf5i = fabc5z['createAttributeNS'](h28ex6, pm34y0);this['locator'] && a_ex9vok(td7$ns['getLocator'](mj_41y), zbf5i), zbf5i['value'] = zbf5i['nodeValue'] = cfzwq, j$t_7['setAttributeNode'](zbf5i);
    }
  }, 'endElement': function () {
    var cbz5 = this['currentElement'];cbz5['tagName'], this['currentElement'] = cbz5['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (qzb, pl043) {
    pl043 = this['doc']['createProcessingInstruction'](qzb, pl043), (this['locator'] && a_ex9vok(this['locator'], pl043), a_i9k5o(this, pl043));
  }, 'ignorableWhitespace': function () {}, 'characters': function (j71_) {
    var q0l3pw;(j71_ = a_g8h62r['apply'](this, arguments)) && (q0l3pw = this['cdata'] ? this['doc']['createCDATASection'](j71_) : this['doc']['createTextNode'](j71_), this['currentElement'] ? this['currentElement']['appendChild'](q0l3pw) : /^\s*$/['test'](j71_) && this['doc']['appendChild'](q0l3pw), this['locator'] && a_ex9vok(this['locator'], q0l3pw));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (pwyl3) {
    (this['locator'] = pwyl3) && (pwyl3['lineNumber'] = 0x0);
  }, 'comment': function (ikvo) {
    ikvo = a_g8h62r['apply'](this, arguments);var l4yp03 = this['doc']['createComment'](ikvo);this['locator'] && a_ex9vok(this['locator'], l4yp03), a_i9k5o(this, l4yp03);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (yp4l03, t1$_j7, oaki) {
    var fzca5b = this['doc']['implementation'];fzca5b && fzca5b['createDocumentType'] && (oaki = fzca5b['createDocumentType'](yp4l03, t1$_j7, oaki), this['locator'] && a_ex9vok(this['locator'], oaki), a_i9k5o(this, oaki));
  }, 'warning': function (vb5) {
    console['warn']('[xmldom warning]\t' + vb5, a_ia5vk(this['locator']));
  }, 'error': function (ym_j4) {
    console['error']('[xmldom error]\t' + ym_j4, a_ia5vk(this['locator']));
  }, 'fatalError': function (xheo8) {
    throw console['error']('[xmldom fatalError]\t' + xheo8, a_ia5vk(this['locator'])), xheo8;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function ($j_71t) {
  a_oe9x8h['prototype'][$j_71t] = function () {
    return null;
  };
});var a_wfcl3 = require('./cccsax')['XMLReader'],
    a_$j_1 = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_bfcqza;