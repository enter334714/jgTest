var k = wx.$f;
function ff0tm(k62) {
  this['options'] = k62 || { 'locator': {} };
}function fbtfvmi(i0f, sxjwn, sodj) {
  function ocdw(jxwn) {
    var rx8enz = i0f[jxwn];!rx8enz && q5_0k && (rx8enz = 0x2 == i0f['length'] ? function (wdjc) {
      i0f(jxwn, wdjc);
    } : i0f), cjswo[jxwn] = rx8enz && function (h5tkq) {
      rx8enz('[xmldom ' + jxwn + ']\t' + h5tkq + fzx78r(sodj));
    } || function () {};
  }if (!i0f) {
    if (sxjwn instanceof fmfhibt) return sxjwn;i0f = sxjwn;
  }var cjswo = {},
      q5_0k = i0f instanceof Function;return sodj = sodj || {}, ocdw('warning'), ocdw('error'), ocdw('fatalError'), cjswo;
}function fmfhibt() {
  this['cdata'] = !0x1;
}function fdesn($8y73, mqft) {
  mqft['lineNumber'] = $8y73['lineNumber'], mqft['columnNumber'] = $8y73['columnNumber'];
}function fzx78r(qhmt0f) {
  return qhmt0f ? '\x0a@' + (qhmt0f['systemId'] || '') + '#[line:' + qhmt0f['lineNumber'] + ',col:' + qhmt0f['columnNumber'] + ']' : void 0x0;
}function fp7$y3a(exznr8, d6jos, q5_0) {
  return 'string' == typeof exznr8 ? exznr8['substr'](d6jos, q5_0) : exznr8['length'] >= d6jos + q5_0 || d6jos ? new java['lang']['String'](exznr8, d6jos, q5_0) + '' : exznr8;
}function f_o462c(re$78, h5k_0q) {
  re$78['currentElement'] ? re$78['currentElement']['appendChild'](h5k_0q) : re$78['doc']['appendChild'](h5k_0q);
}ff0tm['prototype']['parseFromString'] = function (xdsw, e8$zr7) {
  var fumvb = this['options'],
      wcjsd = new fx8ewnz(),
      xz8ne = fumvb['domBuilder'] || new fmfhibt(),
      vibu = fumvb['errorHandler'],
      tmhfb = fumvb['locator'],
      h0t5 = fumvb['xmlns'] || {},
      pay = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return tmhfb && xz8ne['setDocumentLocator'](tmhfb), wcjsd['errorHandler'] = fbtfvmi(vibu, xz8ne, tmhfb), wcjsd['domBuilder'] = fumvb['domBuilder'] || xz8ne, /\/x?html?$/['test'](e8$zr7) && (pay['nbsp'] = '\u00a0', pay['copy'] = '©', h0t5[''] = 'http://www.w3.org/1999/xhtml'), h0t5['xml'] = h0t5['xml'] || 'http://www.w3.org/XML/1998/namespace', xdsw ? wcjsd['parse'](xdsw, h0t5, pay) : wcjsd['errorHandler']['error']('invalid doc source'), xz8ne['doc'];
}, fmfhibt['prototype'] = { 'startDocument': function () {
    this['doc'] = new fya7$p3()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (p3$, y$ap37, r8exnz, mfthq0) {
    var ivumbf = this['doc'],
        jc64o = ivumbf['createElementNS'](p3$, r8exnz || y$ap37),
        qhmtf0 = mfthq0['length'];f_o462c(this, jc64o), this['currentElement'] = jc64o, this['locator'] && fdesn(this['locator'], jc64o);for (var ibvm = 0x0; qhmtf0 > ibvm; ibvm++) {
      var p3$ = mfthq0['getURI'](ibvm),
          $p37y = mfthq0['getValue'](ibvm),
          r8exnz = mfthq0['getQName'](ibvm),
          k0q4 = ivumbf['createAttributeNS'](p3$, r8exnz);this['locator'] && fdesn(mfthq0['getLocator'](ibvm), k0q4), k0q4['value'] = k0q4['nodeValue'] = $p37y, jc64o['setAttributeNode'](k0q4);
    }
  }, 'endElement': function () {
    {
      var ifbmvu = this['currentElement'];ifbmvu['tagName'];
    }this['currentElement'] = ifbmvu['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (cjs, wcjds) {
    var jocd2 = this['doc']['createProcessingInstruction'](cjs, wcjds);this['locator'] && fdesn(this['locator'], jocd2), f_o462c(this, jocd2);
  }, 'ignorableWhitespace': function () {}, 'characters': function (xswndj) {
    if (xswndj = fp7$y3a['apply'](this, arguments)) {
      if (this['cdata']) var nzxw8 = this['doc']['createCDATASection'](xswndj);else var nzxw8 = this['doc']['createTextNode'](xswndj);this['currentElement'] ? this['currentElement']['appendChild'](nzxw8) : /^\s*$/['test'](xswndj) && this['doc']['appendChild'](nzxw8), this['locator'] && fdesn(this['locator'], nzxw8);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (q0_4k) {
    (this['locator'] = q0_4k) && (q0_4k['lineNumber'] = 0x0);
  }, 'comment': function (rx87ez) {
    rx87ez = fp7$y3a['apply'](this, arguments);var tbfim = this['doc']['createComment'](rx87ez);this['locator'] && fdesn(this['locator'], tbfim), f_o462c(this, tbfim);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (sjdnw, ednxs, y8$37) {
    var uvibm1 = this['doc']['implementation'];if (uvibm1 && uvibm1['createDocumentType']) {
      var fmi0t = uvibm1['createDocumentType'](sjdnw, ednxs, y8$37);this['locator'] && fdesn(this['locator'], fmi0t), f_o462c(this, fmi0t);
    }
  }, 'warning': function (owsdc) {
    console['warn']('[xmldom warning]\t' + owsdc, fzx78r(this['locator']));
  }, 'error': function (xrz8) {
    console['error']('[xmldom error]\t' + xrz8, fzx78r(this['locator']));
  }, 'fatalError': function (_k540q) {
    throw console['error']('[xmldom fatalError]\t' + _k540q, fzx78r(this['locator'])), _k540q;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_c6o) {
  fmfhibt['prototype'][_c6o] = function () {
    return null;
  };
});var fx8ewnz = require('./fffsax')['XMLReader'],
    fya7$p3 = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = ff0tm;