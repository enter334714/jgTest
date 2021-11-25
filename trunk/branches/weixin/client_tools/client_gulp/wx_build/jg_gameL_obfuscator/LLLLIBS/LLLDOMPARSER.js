var W = wx.$l;
function L9$8b2ds(kjhqza) {
  this['options'] = kjhqza || { 'locator': {} };
}function L9tlq59f(kjhlzq, zq5tlf, jzqklh) {
  function zqthlj(_xn0y4) {
    var nyx8 = kjhlzq[_xn0y4];!nyx8 && tqhlz && (nyx8 = 0x2 == kjhlzq['length'] ? function (xsn4_8) {
      kjhlzq(_xn0y4, xsn4_8);
    } : kjhlzq), $ba2[_xn0y4] = nyx8 && function (jbhaz) {
      nyx8('[xmldom ' + _xn0y4 + ']\t' + jbhaz + L9lt95q(jzqklh));
    } || function () {};
  }if (!kjhlzq) {
    if (zq5tlf instanceof L9qlhz5t) return zq5tlf;kjhlzq = zq5tlf;
  }var $ba2 = {},
      tqhlz = kjhlzq instanceof Function;return jzqklh = jzqklh || {}, zqthlj('warning'), zqthlj('error'), zqthlj('fatalError'), $ba2;
}function L9qlhz5t() {
  this['cdata'] = !0x1;
}function L9d4$s82(yc30rx, _4yx) {
  _4yx['lineNumber'] = yc30rx['lineNumber'], _4yx['columnNumber'] = yc30rx['columnNumber'];
}function L9lt95q(kzja) {
  return kzja ? '\x0a@' + (kzja['systemId'] || '') + '#[line:' + kzja['lineNumber'] + ',col:' + kzja['columnNumber'] + ']' : void 0x0;
}function L9y0xn3r(pe6ug1, nyx0_3, azhkjb) {
  return 'string' == typeof pe6ug1 ? pe6ug1['substr'](nyx0_3, azhkjb) : pe6ug1['length'] >= nyx0_3 + azhkjb || nyx0_3 ? new java['lang']['String'](pe6ug1, nyx0_3, azhkjb) + '' : pe6ug1;
}function L9cyr03x(kjhb2, veug71) {
  kjhb2['currentElement'] ? kjhb2['currentElement']['appendChild'](veug71) : kjhb2['doc']['appendChild'](veug71);
}L9$8b2ds['prototype']['parseFromString'] = function (bhkaj, y40nx_) {
  var fo19v = this['options'],
      f719o = new L9zlq5h(),
      kjzaq = fo19v['domBuilder'] || new L9qlhz5t(),
      xn3_0 = fo19v['errorHandler'],
      v6gue1 = fo19v['locator'],
      zkhqaj = fo19v['xmlns'] || {},
      rwmi3 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return v6gue1 && kjzaq['setDocumentLocator'](v6gue1), f719o['errorHandler'] = L9tlq59f(xn3_0, kjzaq, v6gue1), f719o['domBuilder'] = fo19v['domBuilder'] || kjzaq, /\/x?html?$/['test'](y40nx_) && (rwmi3['nbsp'] = '\u00a0', rwmi3['copy'] = '©', zkhqaj[''] = 'http://www.w3.org/1999/xhtml'), zkhqaj['xml'] = zkhqaj['xml'] || 'http://www.w3.org/XML/1998/namespace', bhkaj ? f719o['parse'](bhkaj, zkhqaj, rwmi3) : f719o['errorHandler']['error']('invalid doc source'), kjzaq['doc'];
}, L9qlhz5t['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9flzq5t()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (sd4$82, _ds4$, i0r3c, imw3cr) {
    var _4sd$8 = this['doc'],
        akjhb2 = _4sd$8['createElementNS'](sd4$82, i0r3c || _ds4$),
        wr3mi = imw3cr['length'];L9cyr03x(this, akjhb2), this['currentElement'] = akjhb2, this['locator'] && L9d4$s82(this['locator'], akjhb2);for (var htq5z = 0x0; wr3mi > htq5z; htq5z++) {
      var sd4$82 = imw3cr['getURI'](htq5z),
          cr3mi = imw3cr['getValue'](htq5z),
          i0r3c = imw3cr['getQName'](htq5z),
          ot95fl = _4sd$8['createAttributeNS'](sd4$82, i0r3c);this['locator'] && L9d4$s82(imw3cr['getLocator'](htq5z), ot95fl), ot95fl['value'] = ot95fl['nodeValue'] = cr3mi, akjhb2['setAttributeNode'](ot95fl);
    }
  }, 'endElement': function () {
    {
      var bd2as$ = this['currentElement'];bd2as$['tagName'];
    }this['currentElement'] = bd2as$['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (q5ztl, ltzf) {
    var s$d482 = this['doc']['createProcessingInstruction'](q5ztl, ltzf);this['locator'] && L9d4$s82(this['locator'], s$d482), L9cyr03x(this, s$d482);
  }, 'ignorableWhitespace': function () {}, 'characters': function (bdsa$) {
    if (bdsa$ = L9y0xn3r['apply'](this, arguments)) {
      if (this['cdata']) var $ds_48 = this['doc']['createCDATASection'](bdsa$);else var $ds_48 = this['doc']['createTextNode'](bdsa$);this['currentElement'] ? this['currentElement']['appendChild']($ds_48) : /^\s*$/['test'](bdsa$) && this['doc']['appendChild']($ds_48), this['locator'] && L9d4$s82(this['locator'], $ds_48);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function ($s_n) {
    (this['locator'] = $s_n) && ($s_n['lineNumber'] = 0x0);
  }, 'comment': function ($4d2s8) {
    $4d2s8 = L9y0xn3r['apply'](this, arguments);var gve17u = this['doc']['createComment']($4d2s8);this['locator'] && L9d4$s82(this['locator'], gve17u), L9cyr03x(this, gve17u);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (mc0ri, _nx0, jazkqh) {
    var a2hjbk = this['doc']['implementation'];if (a2hjbk && a2hjbk['createDocumentType']) {
      var n_4y0 = a2hjbk['createDocumentType'](mc0ri, _nx0, jazkqh);this['locator'] && L9d4$s82(this['locator'], n_4y0), L9cyr03x(this, n_4y0);
    }
  }, 'warning': function (iwm3) {
    console['warn']('[xmldom warning]\t' + iwm3, L9lt95q(this['locator']));
  }, 'error': function (bkd) {
    console['error']('[xmldom error]\t' + bkd, L9lt95q(this['locator']));
  }, 'fatalError': function (_8ns$4) {
    throw console['error']('[xmldom fatalError]\t' + _8ns$4, L9lt95q(this['locator'])), _8ns$4;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (c30mr) {
  L9qlhz5t['prototype'][c30mr] = function () {
    return null;
  };
});var L9zlq5h = require('./lllSAX')['XMLReader'],
    L9flzq5t = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9$8b2ds;