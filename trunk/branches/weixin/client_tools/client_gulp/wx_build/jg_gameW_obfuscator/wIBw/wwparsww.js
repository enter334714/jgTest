var s = wx.$W;
function wv6o5dh(pi09y_) {
  this['options'] = pi09y_ || { 'locator': {} };
}function wkec7(uow5, o5udb, fq2st) {
  function slit$($t0nil) {
    var o3wb = uow5[$t0nil];!o3wb && _0pi9y && (o3wb = 0x2 == uow5['length'] ? function (j_rp9y) {
      uow5($t0nil, j_rp9y);
    } : uow5), nqt$sl[$t0nil] = o3wb && function (y0_9p) {
      o3wb('[xmldom ' + $t0nil + ']\t' + y0_9p + wsti(fq2st));
    } || function () {};
  }if (!uow5) {
    if (o5udb instanceof wck1ae) return o5udb;uow5 = o5udb;
  }var nqt$sl = {},
      _0pi9y = uow5 instanceof Function;return fq2st = fq2st || {}, slit$('warning'), slit$('error'), slit$('fatalError'), nqt$sl;
}function wck1ae() {
  this['cdata'] = !0x1;
}function wz3w1ub(wod65b, stqln) {
  stqln['lineNumber'] = wod65b['lineNumber'], stqln['columnNumber'] = wod65b['columnNumber'];
}function wsti(hvdx6) {
  return hvdx6 ? '\x0a@' + (hvdx6['systemId'] || '') + '#[line:' + hvdx6['lineNumber'] + ',col:' + hvdx6['columnNumber'] + ']' : void 0x0;
}function wka87(j_ary, ltni0$, v6wo5d) {
  return 'string' == typeof j_ary ? j_ary['substr'](ltni0$, v6wo5d) : j_ary['length'] >= ltni0$ + v6wo5d || ltni0$ ? new java['lang']['String'](j_ary, ltni0$, v6wo5d) + '' : j_ary;
}function wy79jr_(e1c8ka, e18kz) {
  e1c8ka['currentElement'] ? e1c8ka['currentElement']['appendChild'](e18kz) : e1c8ka['doc']['appendChild'](e18kz);
}wv6o5dh['prototype']['parseFromString'] = function (nilts, vd65ho) {
  var hdov = this['options'],
      n9ypi0 = new wz183eu(),
      kc18ze = hdov['domBuilder'] || new wck1ae(),
      ftq$s2 = hdov['errorHandler'],
      aekc81 = hdov['locator'],
      bz31w = hdov['xmlns'] || {},
      bw6o5 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return aekc81 && kc18ze['setDocumentLocator'](aekc81), n9ypi0['errorHandler'] = wkec7(ftq$s2, kc18ze, aekc81), n9ypi0['domBuilder'] = hdov['domBuilder'] || kc18ze, /\/x?html?$/['test'](vd65ho) && (bw6o5['nbsp'] = '\u00a0', bw6o5['copy'] = '©', bz31w[''] = 'http://www.w3.org/1999/xhtml'), bz31w['xml'] = bz31w['xml'] || 'http://www.w3.org/XML/1998/namespace', nilts ? n9ypi0['parse'](nilts, bz31w, bw6o5) : n9ypi0['errorHandler']['error']('invalid doc source'), kc18ze['doc'];
}, wck1ae['prototype'] = { 'startDocument': function () {
    this['doc'] = new wlp0$i()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (yp0r_9, zbuw, obu3w5, uwbz35) {
    var ube13 = this['doc'],
        hv64od = ube13['createElementNS'](yp0r_9, obu3w5 || zbuw),
        kr_7 = uwbz35['length'];wy79jr_(this, hv64od), this['currentElement'] = hv64od, this['locator'] && wz3w1ub(this['locator'], hv64od);for (var ze31u = 0x0; kr_7 > ze31u; ze31u++) {
      var yp0r_9 = uwbz35['getURI'](ze31u),
          k8c7ae = uwbz35['getValue'](ze31u),
          obu3w5 = uwbz35['getQName'](ze31u),
          hxvgm4 = ube13['createAttributeNS'](yp0r_9, obu3w5);this['locator'] && wz3w1ub(uwbz35['getLocator'](ze31u), hxvgm4), hxvgm4['value'] = hxvgm4['nodeValue'] = k8c7ae, hv64od['setAttributeNode'](hxvgm4);
    }
  }, 'endElement': function () {
    {
      var $pil = this['currentElement'];$pil['tagName'];
    }this['currentElement'] = $pil['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (sn$lt, kj_ar) {
    var rj7a_y = this['doc']['createProcessingInstruction'](sn$lt, kj_ar);this['locator'] && wz3w1ub(this['locator'], rj7a_y), wy79jr_(this, rj7a_y);
  }, 'ignorableWhitespace': function () {}, 'characters': function (kj_r7a) {
    if (kj_r7a = wka87['apply'](this, arguments)) {
      if (this['cdata']) var $ftsq = this['doc']['createCDATASection'](kj_r7a);else var $ftsq = this['doc']['createTextNode'](kj_r7a);this['currentElement'] ? this['currentElement']['appendChild']($ftsq) : /^\s*$/['test'](kj_r7a) && this['doc']['appendChild']($ftsq), this['locator'] && wz3w1ub(this['locator'], $ftsq);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (a7y) {
    (this['locator'] = a7y) && (a7y['lineNumber'] = 0x0);
  }, 'comment': function (bwodu5) {
    bwodu5 = wka87['apply'](this, arguments);var i0lt$n = this['doc']['createComment'](bwodu5);this['locator'] && wz3w1ub(this['locator'], i0lt$n), wy79jr_(this, i0lt$n);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (yrjp9, j7rk, kz8c1e) {
    var ray7 = this['doc']['implementation'];if (ray7 && ray7['createDocumentType']) {
      var dh4ov6 = ray7['createDocumentType'](yrjp9, j7rk, kz8c1e);this['locator'] && wz3w1ub(this['locator'], dh4ov6), wy79jr_(this, dh4ov6);
    }
  }, 'warning': function (tli0$) {
    console['warn']('[xmldom warning]\t' + tli0$, wsti(this['locator']));
  }, 'error': function (e13bzu) {
    console['error']('[xmldom error]\t' + e13bzu, wsti(this['locator']));
  }, 'fatalError': function (jay_r7) {
    throw console['error']('[xmldom fatalError]\t' + jay_r7, wsti(this['locator'])), jay_r7;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ayrj) {
  wck1ae['prototype'][ayrj] = function () {
    return null;
  };
});var wz183eu = require('./wwqww')['XMLReader'],
    wlp0$i = exports['DOMImplementation'] = require('./wwDOww')['DOMImplementation'];exports['XMLSerializer'] = require('./wwDOww')['XMLSerializer'], exports['DOMParser'] = wv6o5dh;