var d = wx.$A;
function As6hzw(kuyp) {
  this['options'] = kuyp || { 'locator': {} };
}function Ad9e$(bqtyx, ibxypt, up81k3) {
  function sedm$n(ea$mv9) {
    var q_g4bo = bqtyx[ea$mv9];!q_g4bo && mae$n && (q_g4bo = 0x2 == bqtyx['length'] ? function (q_botg) {
      bqtyx(ea$mv9, q_botg);
    } : bqtyx), jdzsh6[ea$mv9] = q_g4bo && function (aem9$) {
      q_g4bo('[xmldom ' + ea$mv9 + ']\t' + aem9$ + Aa$v9e0(up81k3));
    } || function () {};
  }if (!bqtyx) {
    if (ibxypt instanceof Aorg) return ibxypt;bqtyx = ibxypt;
  }var jdzsh6 = {},
      mae$n = bqtyx instanceof Function;return up81k3 = up81k3 || {}, sedm$n('warning'), sedm$n('error'), sedm$n('fatalError'), jdzsh6;
}function Aorg() {
  this['cdata'] = !0x1;
}function Axkp1(eman9, ibypxt) {
  ibypxt['lineNumber'] = eman9['lineNumber'], ibypxt['columnNumber'] = eman9['columnNumber'];
}function Aa$v9e0(j6hwl) {
  return j6hwl ? '\x0a@' + (j6hwl['systemId'] || '') + '#[line:' + j6hwl['lineNumber'] + ',col:' + j6hwl['columnNumber'] + ']' : void 0x0;
}function Admne6(qbtog, $9name, bptxyi) {
  return 'string' == typeof qbtog ? qbtog['substr']($9name, bptxyi) : qbtog['length'] >= $9name + bptxyi || $9name ? new java['lang']['String'](qbtog, $9name, bptxyi) + '' : qbtog;
}function Auipk1y($m9ve, ro_g4) {
  $m9ve['currentElement'] ? $m9ve['currentElement']['appendChild'](ro_g4) : $m9ve['doc']['appendChild'](ro_g4);
}As6hzw['prototype']['parseFromString'] = function (w6lzjh, hzj2l) {
  var tbqgo_ = this['options'],
      p1k = new Am$nd9e(),
      zwhlj6 = tbqgo_['domBuilder'] || new Aorg(),
      kvu380 = tbqgo_['errorHandler'],
      h2jzl = tbqgo_['locator'],
      go = tbqgo_['xmlns'] || {},
      o_bgtq = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return h2jzl && zwhlj6['setDocumentLocator'](h2jzl), p1k['errorHandler'] = Ad9e$(kvu380, zwhlj6, h2jzl), p1k['domBuilder'] = tbqgo_['domBuilder'] || zwhlj6, /\/x?html?$/['test'](hzj2l) && (o_bgtq['nbsp'] = '\u00a0', o_bgtq['copy'] = '©', go[''] = 'http://www.w3.org/1999/xhtml'), go['xml'] = go['xml'] || 'http://www.w3.org/XML/1998/namespace', w6lzjh ? p1k['parse'](w6lzjh, go, o_bgtq) : p1k['errorHandler']['error']('invalid doc source'), zwhlj6['doc'];
}, Aorg['prototype'] = { 'startDocument': function () {
    this['doc'] = new Ana9$m()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (u831kp, g_bqt, py1xit, vu30) {
    var hjdz6s = this['doc'],
        nde6 = hjdz6s['createElementNS'](u831kp, py1xit || g_bqt),
        e$nmds = vu30['length'];Auipk1y(this, nde6), this['currentElement'] = nde6, this['locator'] && Axkp1(this['locator'], nde6);for (var wj6zhl = 0x0; e$nmds > wj6zhl; wj6zhl++) {
      var u831kp = vu30['getURI'](wj6zhl),
          f45r = vu30['getValue'](wj6zhl),
          py1xit = vu30['getQName'](wj6zhl),
          lhwz2j = hjdz6s['createAttributeNS'](u831kp, py1xit);this['locator'] && Axkp1(vu30['getLocator'](wj6zhl), lhwz2j), lhwz2j['value'] = lhwz2j['nodeValue'] = f45r, nde6['setAttributeNode'](lhwz2j);
    }
  }, 'endElement': function () {
    {
      var vu3a = this['currentElement'];vu3a['tagName'];
    }this['currentElement'] = vu3a['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (a38u, btq_g) {
    var hzs6 = this['doc']['createProcessingInstruction'](a38u, btq_g);this['locator'] && Axkp1(this['locator'], hzs6), Auipk1y(this, hzs6);
  }, 'ignorableWhitespace': function () {}, 'characters': function (bqo_x) {
    if (bqo_x = Admne6['apply'](this, arguments)) {
      if (this['cdata']) var kyuip1 = this['doc']['createCDATASection'](bqo_x);else var kyuip1 = this['doc']['createTextNode'](bqo_x);this['currentElement'] ? this['currentElement']['appendChild'](kyuip1) : /^\s*$/['test'](bqo_x) && this['doc']['appendChild'](kyuip1), this['locator'] && Axkp1(this['locator'], kyuip1);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (zlhw6) {
    (this['locator'] = zlhw6) && (zlhw6['lineNumber'] = 0x0);
  }, 'comment': function (am9n) {
    am9n = Admne6['apply'](this, arguments);var md6sjn = this['doc']['createComment'](am9n);this['locator'] && Axkp1(this['locator'], md6sjn), Auipk1y(this, md6sjn);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ky1pi, enm9$a, rg_f74) {
    var e$n9dm = this['doc']['implementation'];if (e$n9dm && e$n9dm['createDocumentType']) {
      var qb4 = e$n9dm['createDocumentType'](ky1pi, enm9$a, rg_f74);this['locator'] && Axkp1(this['locator'], qb4), Auipk1y(this, qb4);
    }
  }, 'warning': function (g4_rof) {
    console['warn']('[xmldom warning]\t' + g4_rof, Aa$v9e0(this['locator']));
  }, 'error': function ($m9v) {
    console['error']('[xmldom error]\t' + $m9v, Aa$v9e0(this['locator']));
  }, 'fatalError': function (kpiy1u) {
    throw console['error']('[xmldom fatalError]\t' + kpiy1u, Aa$v9e0(this['locator'])), kpiy1u;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (r7fg) {
  Aorg['prototype'][r7fg] = function () {
    return null;
  };
});var Am$nd9e = require('./AAcAA')['XMLReader'],
    Ana9$m = exports['DOMImplementation'] = require('./AADOAA')['DOMImplementation'];exports['XMLSerializer'] = require('./AADOAA')['XMLSerializer'], exports['DOMParser'] = As6hzw;