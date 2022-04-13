var v = wx.$d;
function zp45hq(l1fbi) {
  this['options'] = l1fbi || { 'locator': {} };
}function zxdf9(dfa, wr7cn, q$moh0) {
  function qx(mo0q4) {
    var xa9fu = dfa[mo0q4];!xa9fu && a5dx9p && (xa9fu = 0x2 == dfa['length'] ? function (pad59x) {
      dfa(mo0q4, pad59x);
    } : dfa), gmo0t[mo0q4] = xa9fu && function (iflub) {
      xa9fu('[xmldom ' + mo0q4 + ']\t' + iflub + zad5p9(q$moh0));
    } || function () {};
  }if (!dfa) {
    if (wr7cn instanceof zx9p4a5) return wr7cn;dfa = wr7cn;
  }var gmo0t = {},
      a5dx9p = dfa instanceof Function;return q$moh0 = q$moh0 || {}, qx('warning'), qx('error'), qx('fatalError'), gmo0t;
}function zx9p4a5() {
  this['cdata'] = !0x1;
}function zh4mq0o(qa5p4h, fuld9x) {
  fuld9x['lineNumber'] = qa5p4h['lineNumber'], fuld9x['columnNumber'] = qa5p4h['columnNumber'];
}function zad5p9(_86bi) {
  return _86bi ? '\x0a@' + (_86bi['systemId'] || '') + '#[line:' + _86bi['lineNumber'] + ',col:' + _86bi['columnNumber'] + ']' : void 0x0;
}function zcnky(o0mq$h, vz_162, a54qxp) {
  return 'string' == typeof o0mq$h ? o0mq$h['substr'](vz_162, a54qxp) : o0mq$h['length'] >= vz_162 + a54qxp || vz_162 ? new java['lang']['String'](o0mq$h, vz_162, a54qxp) + '' : o0mq$h;
}function zhq4op5(oqh0m4, w3kyzc) {
  oqh0m4['currentElement'] ? oqh0m4['currentElement']['appendChild'](w3kyzc) : oqh0m4['doc']['appendChild'](w3kyzc);
}zp45hq['prototype']['parseFromString'] = function (pxq5a, z2kv) {
  var b8lfud = this['options'],
      m$g0ot = new ze7ncy(),
      phoq0 = b8lfud['domBuilder'] || new zx9p4a5(),
      vz_632 = b8lfud['errorHandler'],
      zw3yk = b8lfud['locator'],
      jnr7ce = b8lfud['xmlns'] || {},
      vwykz = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return zw3yk && phoq0['setDocumentLocator'](zw3yk), m$g0ot['errorHandler'] = zxdf9(vz_632, phoq0, zw3yk), m$g0ot['domBuilder'] = b8lfud['domBuilder'] || phoq0, /\/x?html?$/['test'](z2kv) && (vwykz['nbsp'] = '\u00a0', vwykz['copy'] = '©', jnr7ce[''] = 'http://www.w3.org/1999/xhtml'), jnr7ce['xml'] = jnr7ce['xml'] || 'http://www.w3.org/XML/1998/namespace', pxq5a ? m$g0ot['parse'](pxq5a, jnr7ce, vwykz) : m$g0ot['errorHandler']['error']('invalid doc source'), phoq0['doc'];
}, zx9p4a5['prototype'] = { 'startDocument': function () {
    this['doc'] = new zm4oh()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (cnrwe7, kcwy7, g$, nyecw7) {
    var njerc = this['doc'],
        _8612 = njerc['createElementNS'](cnrwe7, g$ || kcwy7),
        wyvzk3 = nyecw7['length'];zhq4op5(this, _8612), this['currentElement'] = _8612, this['locator'] && zh4mq0o(this['locator'], _8612);for (var ej7cnr = 0x0; wyvzk3 > ej7cnr; ej7cnr++) {
      var cnrwe7 = nyecw7['getURI'](ej7cnr),
          m0oht$ = nyecw7['getValue'](ej7cnr),
          g$ = nyecw7['getQName'](ej7cnr),
          ulfd = njerc['createAttributeNS'](cnrwe7, g$);this['locator'] && zh4mq0o(nyecw7['getLocator'](ej7cnr), ulfd), ulfd['value'] = ulfd['nodeValue'] = m0oht$, _8612['setAttributeNode'](ulfd);
    }
  }, 'endElement': function () {
    {
      var ycewn = this['currentElement'];ycewn['tagName'];
    }this['currentElement'] = ycewn['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (z326v_, flubd8) {
    var ye7wcn = this['doc']['createProcessingInstruction'](z326v_, flubd8);this['locator'] && zh4mq0o(this['locator'], ye7wcn), zhq4op5(this, ye7wcn);
  }, 'ignorableWhitespace': function () {}, 'characters': function (xdf9u) {
    if (xdf9u = zcnky['apply'](this, arguments)) {
      if (this['cdata']) var ewc7 = this['doc']['createCDATASection'](xdf9u);else var ewc7 = this['doc']['createTextNode'](xdf9u);this['currentElement'] ? this['currentElement']['appendChild'](ewc7) : /^\s*$/['test'](xdf9u) && this['doc']['appendChild'](ewc7), this['locator'] && zh4mq0o(this['locator'], ewc7);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (i8fb) {
    (this['locator'] = i8fb) && (i8fb['lineNumber'] = 0x0);
  }, 'comment': function (wzkv3) {
    wzkv3 = zcnky['apply'](this, arguments);var $0tmh = this['doc']['createComment'](wzkv3);this['locator'] && zh4mq0o(this['locator'], $0tmh), zhq4op5(this, $0tmh);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (vk3z2, ncey, lbfu) {
    var jnec7r = this['doc']['implementation'];if (jnec7r && jnec7r['createDocumentType']) {
      var xdp5a = jnec7r['createDocumentType'](vk3z2, ncey, lbfu);this['locator'] && zh4mq0o(this['locator'], xdp5a), zhq4op5(this, xdp5a);
    }
  }, 'warning': function (i8261_) {
    console['warn']('[xmldom warning]\t' + i8261_, zad5p9(this['locator']));
  }, 'error': function (b1_6i) {
    console['error']('[xmldom error]\t' + b1_6i, zad5p9(this['locator']));
  }, 'fatalError': function (dlub8) {
    throw console['error']('[xmldom fatalError]\t' + dlub8, zad5p9(this['locator'])), dlub8;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (q4axp) {
  zx9p4a5['prototype'][q4axp] = function () {
    return null;
  };
});var ze7ncy = require('./tT12tt')['XMLReader'],
    zm4oh = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = zp45hq;