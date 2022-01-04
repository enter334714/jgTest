var M = wx.$T;
function tt92ivc(x7oe0q) {
  this['options'] = x7oe0q || { 'locator': {} };
}function ti2t49(argjb, v$pd, cti492) {
  function fp7z$d($9idc) {
    var arkbs = argjb[$9idc];!arkbs && rgjakb && (arkbs = 0x2 == argjb['length'] ? function (ajgbrn) {
      argjb($9idc, ajgbrn);
    } : argjb), ivct2[$9idc] = arkbs && function (q0xym_) {
      arkbs('[xmldom ' + $9idc + ']\t' + q0xym_ + tn831r(cti492));
    } || function () {};
  }if (!argjb) {
    if (v$pd instanceof tyex_0) return v$pd;argjb = v$pd;
  }var ivct2 = {},
      rgjakb = argjb instanceof Function;return cti492 = cti492 || {}, fp7z$d('warning'), fp7z$d('error'), fp7z$d('fatalError'), ivct2;
}function tyex_0() {
  this['cdata'] = !0x1;
}function tz$vdpf(qeo0x, _mw65) {
  _mw65['lineNumber'] = qeo0x['lineNumber'], _mw65['columnNumber'] = qeo0x['columnNumber'];
}function tn831r(dfpv$) {
  return dfpv$ ? '\x0a@' + (dfpv$['systemId'] || '') + '#[line:' + dfpv$['lineNumber'] + ',col:' + dfpv$['columnNumber'] + ']' : void 0x0;
}function t$v9dfp($9fp, dopz, e0_yx) {
  return 'string' == typeof $9fp ? $9fp['substr'](dopz, e0_yx) : $9fp['length'] >= dopz + e0_yx || dopz ? new java['lang']['String']($9fp, dopz, e0_yx) + '' : $9fp;
}function tl2ti4(ng1r, pezfo) {
  ng1r['currentElement'] ? ng1r['currentElement']['appendChild'](pezfo) : ng1r['doc']['appendChild'](pezfo);
}tt92ivc['prototype']['parseFromString'] = function (m5h1w6, y0qm_x) {
  var $9vpdf = this['options'],
      qxeo = new tc9$vd(),
      oez7q0 = $9vpdf['domBuilder'] || new tyex_0(),
      v$9it = $9vpdf['errorHandler'],
      dzo7 = $9vpdf['locator'],
      gkabrj = $9vpdf['xmlns'] || {},
      fd$pz = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return dzo7 && oez7q0['setDocumentLocator'](dzo7), qxeo['errorHandler'] = ti2t49(v$9it, oez7q0, dzo7), qxeo['domBuilder'] = $9vpdf['domBuilder'] || oez7q0, /\/x?html?$/['test'](y0qm_x) && (fd$pz['nbsp'] = '\u00a0', fd$pz['copy'] = '©', gkabrj[''] = 'http://www.w3.org/1999/xhtml'), gkabrj['xml'] = gkabrj['xml'] || 'http://www.w3.org/XML/1998/namespace', m5h1w6 ? qxeo['parse'](m5h1w6, gkabrj, fd$pz) : qxeo['errorHandler']['error']('invalid doc source'), oez7q0['doc'];
}, tyex_0['prototype'] = { 'startDocument': function () {
    this['doc'] = new t_mh5w()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (oqzf, xeoq07, kjbagr, dpiv) {
    var cti = this['doc'],
        oy0ex = cti['createElementNS'](oqzf, kjbagr || xeoq07),
        gn3rj8 = dpiv['length'];tl2ti4(this, oy0ex), this['currentElement'] = oy0ex, this['locator'] && tz$vdpf(this['locator'], oy0ex);for (var pvfd9 = 0x0; gn3rj8 > pvfd9; pvfd9++) {
      var oqzf = dpiv['getURI'](pvfd9),
          _mw5h6 = dpiv['getValue'](pvfd9),
          kjbagr = dpiv['getQName'](pvfd9),
          gr3n8j = cti['createAttributeNS'](oqzf, kjbagr);this['locator'] && tz$vdpf(dpiv['getLocator'](pvfd9), gr3n8j), gr3n8j['value'] = gr3n8j['nodeValue'] = _mw5h6, oy0ex['setAttributeNode'](gr3n8j);
    }
  }, 'endElement': function () {
    {
      var y0qxe = this['currentElement'];y0qxe['tagName'];
    }this['currentElement'] = y0qxe['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (qeoyx0, bkja) {
    var n318 = this['doc']['createProcessingInstruction'](qeoyx0, bkja);this['locator'] && tz$vdpf(this['locator'], n318), tl2ti4(this, n318);
  }, 'ignorableWhitespace': function () {}, 'characters': function (w5mhy) {
    if (w5mhy = t$v9dfp['apply'](this, arguments)) {
      if (this['cdata']) var ujba = this['doc']['createCDATASection'](w5mhy);else var ujba = this['doc']['createTextNode'](w5mhy);this['currentElement'] ? this['currentElement']['appendChild'](ujba) : /^\s*$/['test'](w5mhy) && this['doc']['appendChild'](ujba), this['locator'] && tz$vdpf(this['locator'], ujba);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (xye) {
    (this['locator'] = xye) && (xye['lineNumber'] = 0x0);
  }, 'comment': function (fe7z) {
    fe7z = t$v9dfp['apply'](this, arguments);var r3nbg = this['doc']['createComment'](fe7z);this['locator'] && tz$vdpf(this['locator'], r3nbg), tl2ti4(this, r3nbg);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (xey_, gnabrj, $d9c) {
    var ct9v = this['doc']['implementation'];if (ct9v && ct9v['createDocumentType']) {
      var nrj = ct9v['createDocumentType'](xey_, gnabrj, $d9c);this['locator'] && tz$vdpf(this['locator'], nrj), tl2ti4(this, nrj);
    }
  }, 'warning': function (xqo0y) {
    console['warn']('[xmldom warning]\t' + xqo0y, tn831r(this['locator']));
  }, 'error': function (_myxwh) {
    console['error']('[xmldom error]\t' + _myxwh, tn831r(this['locator']));
  }, 'fatalError': function (fp7zdo) {
    throw console['error']('[xmldom fatalError]\t' + fp7zdo, tn831r(this['locator'])), fp7zdo;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (n15) {
  tyex_0['prototype'][n15] = function () {
    return null;
  };
});var tc9$vd = require('./tT12tt')['XMLReader'],
    t_mh5w = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = tt92ivc;