var b = wx.$e;
function e_xty(d49pgv) {
  this['options'] = d49pgv || { 'locator': {} };
}function euf6tx3(qnesw5, fyxit3, $m2rl) {
  function xif3y(i_xfyt) {
    var or5l$m = qnesw5[i_xfyt];!or5l$m && u6eqs && (or5l$m = 0x2 == qnesw5['length'] ? function (v8g2ol) {
      qnesw5(i_xfyt, v8g2ol);
    } : qnesw5), axyti[i_xfyt] = or5l$m ? function (dk) {
      or5l$m('[xmldom ' + i_xfyt + ']\t' + dk + el$orm2($m2rl));
    } : function () {};
  }if (!qnesw5) {
    if (fyxit3 instanceof ei7y_0a) return fyxit3;qnesw5 = fyxit3;
  }var axyti = {},
      u6eqs = qnesw5 instanceof Function;return $m2rl = $m2rl || {}, xif3y('warning'), xif3y('error'), xif3y('fatalError'), axyti;
}function ei7y_0a() {
  this['cdata'] = !0x1;
}function ei_0xay(ai0yx_, g1p9d4) {
  g1p9d4['lineNumber'] = ai0yx_['lineNumber'], g1p9d4['columnNumber'] = ai0yx_['columnNumber'];
}function el$orm2(gv42p) {
  return gv42p ? '\x0a@' + (gv42p['systemId'] || '') + '#[line:' + gv42p['lineNumber'] + ',col:' + gv42p['columnNumber'] + ']' : void 0x0;
}function evd4g9p(vlm8o, xy3tif, z0a7b) {
  return 'string' == typeof vlm8o ? vlm8o['substr'](xy3tif, z0a7b) : vlm8o['length'] >= xy3tif + z0a7b || xy3tif ? new java['lang']['String'](vlm8o, xy3tif, z0a7b) + '' : vlm8o;
}function eza0i7(gdp9, dk9hj) {
  (gdp9['currentElement'] || gdp9['doc'])['appendChild'](dk9hj);
}e_xty['prototype']['parseFromString'] = function (kj19h, vml) {
  var s$m5r = this['options'],
      ue6 = new ea07zi(),
      mr5o$ = s$m5r['domBuilder'] || new ei7y_0a(),
      rmo28l = s$m5r['errorHandler'],
      gv9p4d = s$m5r['locator'],
      pvgd4 = s$m5r['xmlns'] || {},
      nqes = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return gv9p4d && mr5o$['setDocumentLocator'](gv9p4d), ue6['errorHandler'] = euf6tx3(rmo28l, mr5o$, gv9p4d), ue6['domBuilder'] = s$m5r['domBuilder'] || mr5o$, /\/x?html?$/['test'](vml) && (nqes['nbsp'] = '\u00a0', nqes['copy'] = '©', pvgd4[''] = 'http://www.w3.org/1999/xhtml'), pvgd4['xml'] = pvgd4['xml'] || 'http://www.w3.org/XML/1998/namespace', kj19h ? ue6['parse'](kj19h, pvgd4, nqes) : ue6['errorHandler']['error']('invalid doc source'), mr5o$['doc'];
}, ei7y_0a['prototype'] = { 'startDocument': function () {
    this['doc'] = new epgv84d()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (rm5ns$, q5wens, yfx3ti, k9jdh) {
    var sn$r5q = this['doc'],
        v2go8l = sn$r5q['createElementNS'](rm5ns$, yfx3ti || q5wens),
        x_yait = k9jdh['length'];eza0i7(this, v2go8l), this['currentElement'] = v2go8l, this['locator'] && ei_0xay(this['locator'], v2go8l);for (var nswqu = 0x0; nswqu < x_yait; nswqu++) {
      var rm5ns$ = k9jdh['getURI'](nswqu),
          sewq5n = k9jdh['getValue'](nswqu),
          yfx3ti = k9jdh['getQName'](nswqu),
          k1h9j = sn$r5q['createAttributeNS'](rm5ns$, yfx3ti);this['locator'] && ei_0xay(k9jdh['getLocator'](nswqu), k1h9j), k1h9j['value'] = k1h9j['nodeValue'] = sewq5n, v2go8l['setAttributeNode'](k1h9j);
    }
  }, 'endElement': function () {
    var eu6qw = this['currentElement'];eu6qw['tagName'], this['currentElement'] = eu6qw['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (fx63u, wu6seq) {
    wu6seq = this['doc']['createProcessingInstruction'](fx63u, wu6seq), (this['locator'] && ei_0xay(this['locator'], wu6seq), eza0i7(this, wu6seq));
  }, 'ignorableWhitespace': function () {}, 'characters': function (qr5n$s) {
    var n$rqs;(qr5n$s = evd4g9p['apply'](this, arguments)) && (n$rqs = this['cdata'] ? this['doc']['createCDATASection'](qr5n$s) : this['doc']['createTextNode'](qr5n$s), this['currentElement'] ? this['currentElement']['appendChild'](n$rqs) : /^\s*$/['test'](qr5n$s) && this['doc']['appendChild'](n$rqs), this['locator'] && ei_0xay(this['locator'], n$rqs));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (qw5sen) {
    (this['locator'] = qw5sen) && (qw5sen['lineNumber'] = 0x0);
  }, 'comment': function ($qs5r) {
    $qs5r = evd4g9p['apply'](this, arguments);var sq6uwe = this['doc']['createComment']($qs5r);this['locator'] && ei_0xay(this['locator'], sq6uwe), eza0i7(this, sq6uwe);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (qw6u3e, y_fxti, i0z_7a) {
    var y_07ia = this['doc']['implementation'];y_07ia && y_07ia['createDocumentType'] && (i0z_7a = y_07ia['createDocumentType'](qw6u3e, y_fxti, i0z_7a), this['locator'] && ei_0xay(this['locator'], i0z_7a), eza0i7(this, i0z_7a));
  }, 'warning': function (_7b0a) {
    console['warn']('[xmldom warning]\t' + _7b0a, el$orm2(this['locator']));
  }, 'error': function (wq3ue6) {
    console['error']('[xmldom error]\t' + wq3ue6, el$orm2(this['locator']));
  }, 'fatalError': function (enus) {
    throw console['error']('[xmldom fatalError]\t' + enus, el$orm2(this['locator'])), enus;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (wqe5sn) {
  ei7y_0a['prototype'][wqe5sn] = function () {
    return null;
  };
});var ea07zi = require('./eeesax')['XMLReader'],
    epgv84d = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = e_xty;