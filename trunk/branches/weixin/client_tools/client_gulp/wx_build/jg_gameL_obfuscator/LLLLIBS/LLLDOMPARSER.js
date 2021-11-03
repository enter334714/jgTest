var W = wx.$l;
function L9d8sb2(f91ov7) {
  this['options'] = f91ov7 || { 'locator': {} };
}function L9cirwm(o97t5, v6eu, zqjl) {
  function tl59f(c0ry3m) {
    var l95of = o97t5[c0ry3m];!l95of && fql9 && (l95of = 0x2 == o97t5['length'] ? function (y3rcm0) {
      o97t5(c0ry3m, y3rcm0);
    } : o97t5), kdb2$[c0ry3m] = l95of && function (sn_$8) {
      l95of('[xmldom ' + c0ry3m + ']\t' + sn_$8 + L9pu61e(zqjl));
    } || function () {};
  }if (!o97t5) {
    if (v6eu instanceof L9ds2$b) return v6eu;o97t5 = v6eu;
  }var kdb2$ = {},
      fql9 = o97t5 instanceof Function;return zqjl = zqjl || {}, tl59f('warning'), tl59f('error'), tl59f('fatalError'), kdb2$;
}function L9ds2$b() {
  this['cdata'] = !0x1;
}function L9mr3y0(o57, qhkzja) {
  qhkzja['lineNumber'] = o57['lineNumber'], qhkzja['columnNumber'] = o57['columnNumber'];
}function L9pu61e(qha) {
  return qha ? '\x0a@' + (qha['systemId'] || '') + '#[line:' + qha['lineNumber'] + ',col:' + qha['columnNumber'] + ']' : void 0x0;
}function L9_ds$48(hzt5l, gpeu1, v79oe1) {
  return 'string' == typeof hzt5l ? hzt5l['substr'](gpeu1, v79oe1) : hzt5l['length'] >= gpeu1 + v79oe1 || gpeu1 ? new java['lang']['String'](hzt5l, gpeu1, v79oe1) + '' : hzt5l;
}function L9nxy04(tzlq5h, sabd$2) {
  tzlq5h['currentElement'] ? tzlq5h['currentElement']['appendChild'](sabd$2) : tzlq5h['doc']['appendChild'](sabd$2);
}L9d8sb2['prototype']['parseFromString'] = function (ad$s, tlfq) {
  var crmwi = this['options'],
      x8sn4_ = new L9ftz(),
      f5lt9q = crmwi['domBuilder'] || new L9ds2$b(),
      t75of = crmwi['errorHandler'],
      ny0x = crmwi['locator'],
      o71veg = crmwi['xmlns'] || {},
      akzqhj = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ny0x && f5lt9q['setDocumentLocator'](ny0x), x8sn4_['errorHandler'] = L9cirwm(t75of, f5lt9q, ny0x), x8sn4_['domBuilder'] = crmwi['domBuilder'] || f5lt9q, /\/x?html?$/['test'](tlfq) && (akzqhj['nbsp'] = '\u00a0', akzqhj['copy'] = '©', o71veg[''] = 'http://www.w3.org/1999/xhtml'), o71veg['xml'] = o71veg['xml'] || 'http://www.w3.org/XML/1998/namespace', ad$s ? x8sn4_['parse'](ad$s, o71veg, akzqhj) : x8sn4_['errorHandler']['error']('invalid doc source'), f5lt9q['doc'];
}, L9ds2$b['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9qtjzlh()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (yn8x4_, $ds_84, y4xn, rc03my) {
    var djk2ab = this['doc'],
        t59o = djk2ab['createElementNS'](yn8x4_, y4xn || $ds_84),
        pg6 = rc03my['length'];L9nxy04(this, t59o), this['currentElement'] = t59o, this['locator'] && L9mr3y0(this['locator'], t59o);for (var n4y8_ = 0x0; pg6 > n4y8_; n4y8_++) {
      var yn8x4_ = rc03my['getURI'](n4y8_),
          tofl = rc03my['getValue'](n4y8_),
          y4xn = rc03my['getQName'](n4y8_),
          sbda2 = djk2ab['createAttributeNS'](yn8x4_, y4xn);this['locator'] && L9mr3y0(rc03my['getLocator'](n4y8_), sbda2), sbda2['value'] = sbda2['nodeValue'] = tofl, t59o['setAttributeNode'](sbda2);
    }
  }, 'endElement': function () {
    {
      var jka2b = this['currentElement'];jka2b['tagName'];
    }this['currentElement'] = jka2b['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (b$d2s, rmcy03) {
    var gv1o7 = this['doc']['createProcessingInstruction'](b$d2s, rmcy03);this['locator'] && L9mr3y0(this['locator'], gv1o7), L9nxy04(this, gv1o7);
  }, 'ignorableWhitespace': function () {}, 'characters': function (l5zth) {
    if (l5zth = L9_ds$48['apply'](this, arguments)) {
      if (this['cdata']) var f5tlo9 = this['doc']['createCDATASection'](l5zth);else var f5tlo9 = this['doc']['createTextNode'](l5zth);this['currentElement'] ? this['currentElement']['appendChild'](f5tlo9) : /^\s*$/['test'](l5zth) && this['doc']['appendChild'](f5tlo9), this['locator'] && L9mr3y0(this['locator'], f5tlo9);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (zhltj) {
    (this['locator'] = zhltj) && (zhltj['lineNumber'] = 0x0);
  }, 'comment': function (_x0yn4) {
    _x0yn4 = L9_ds$48['apply'](this, arguments);var jzhkb = this['doc']['createComment'](_x0yn4);this['locator'] && L9mr3y0(this['locator'], jzhkb), L9nxy04(this, jzhkb);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ak2jdb, qt5lzf, zklqh) {
    var fo9t = this['doc']['implementation'];if (fo9t && fo9t['createDocumentType']) {
      var euv61g = fo9t['createDocumentType'](ak2jdb, qt5lzf, zklqh);this['locator'] && L9mr3y0(this['locator'], euv61g), L9nxy04(this, euv61g);
    }
  }, 'warning': function (y_xn) {
    console['warn']('[xmldom warning]\t' + y_xn, L9pu61e(this['locator']));
  }, 'error': function (t975o) {
    console['error']('[xmldom error]\t' + t975o, L9pu61e(this['locator']));
  }, 'fatalError': function (lqt5zh) {
    throw console['error']('[xmldom fatalError]\t' + lqt5zh, L9pu61e(this['locator'])), lqt5zh;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (sn4_8x) {
  L9ds2$b['prototype'][sn4_8x] = function () {
    return null;
  };
});var L9ftz = require('./lllSAX')['XMLReader'],
    L9qtjzlh = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9d8sb2;