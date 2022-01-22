var Q = wx.$v;
function veqgw8(qwvpgx) {
  this['options'] = qwvpgx || { 'locator': {} };
}function vcjadm0(fso9i$, qxepgw, gxbwqe) {
  function eqg8wb(be8q) {
    var ez8ubl = fso9i$[be8q];!ez8ubl && cd0k7 && (ez8ubl = 0x2 == fso9i$['length'] ? function (qeu8b) {
      fso9i$(be8q, qeu8b);
    } : fso9i$), zy68u[be8q] = ez8ubl && function (wqvxpg) {
      ez8ubl('[xmldom ' + be8q + ']\t' + wqvxpg + vmd7ck0(gxbwqe));
    } || function () {};
  }if (!fso9i$) {
    if (qxepgw instanceof vfsir$9) return qxepgw;fso9i$ = qxepgw;
  }var zy68u = {},
      cd0k7 = fso9i$ instanceof Function;return gxbwqe = gxbwqe || {}, eqg8wb('warning'), eqg8wb('error'), eqg8wb('fatalError'), zy68u;
}function vfsir$9() {
  this['cdata'] = !0x1;
}function vgqpv(w5x, s4f$oi) {
  s4f$oi['lineNumber'] = w5x['lineNumber'], s4f$oi['columnNumber'] = w5x['columnNumber'];
}function vmd7ck0(jcam0) {
  return jcam0 ? '\x0a@' + (jcam0['systemId'] || '') + '#[line:' + jcam0['lineNumber'] + ',col:' + jcam0['columnNumber'] + ']' : void 0x0;
}function vgqb8($on3s4, xepwg, m0ck7d) {
  return 'string' == typeof $on3s4 ? $on3s4['substr'](xepwg, m0ck7d) : $on3s4['length'] >= xepwg + m0ck7d || xepwg ? new java['lang']['String']($on3s4, xepwg, m0ck7d) + '' : $on3s4;
}function vuhl($s3o4i, o2n34) {
  $s3o4i['currentElement'] ? $s3o4i['currentElement']['appendChild'](o2n34) : $s3o4i['doc']['appendChild'](o2n34);
}veqgw8['prototype']['parseFromString'] = function (o$if9s, o$sn34) {
  var tn2_ = this['options'],
      is$fo = new v$4osn3(),
      lb6 = tn2_['domBuilder'] || new vfsir$9(),
      zlhy6 = tn2_['errorHandler'],
      t3_2n4 = tn2_['locator'],
      o4s3i$ = tn2_['xmlns'] || {},
      f$rsi9 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return t3_2n4 && lb6['setDocumentLocator'](t3_2n4), is$fo['errorHandler'] = vcjadm0(zlhy6, lb6, t3_2n4), is$fo['domBuilder'] = tn2_['domBuilder'] || lb6, /\/x?html?$/['test'](o$sn34) && (f$rsi9['nbsp'] = '\u00a0', f$rsi9['copy'] = '©', o4s3i$[''] = 'http://www.w3.org/1999/xhtml'), o4s3i$['xml'] = o4s3i$['xml'] || 'http://www.w3.org/XML/1998/namespace', o$if9s ? is$fo['parse'](o$if9s, o4s3i$, f$rsi9) : is$fo['errorHandler']['error']('invalid doc source'), lb6['doc'];
}, vfsir$9['prototype'] = { 'startDocument': function () {
    this['doc'] = new vofis$()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (bxw, y2h6, _1tyh2, zy8lu) {
    var $si9f = this['doc'],
        j0dm = $si9f['createElementNS'](bxw, _1tyh2 || y2h6),
        t4_3 = zy8lu['length'];vuhl(this, j0dm), this['currentElement'] = j0dm, this['locator'] && vgqpv(this['locator'], j0dm);for (var hy_61z = 0x0; t4_3 > hy_61z; hy_61z++) {
      var bxw = zy8lu['getURI'](hy_61z),
          bu8lze = zy8lu['getValue'](hy_61z),
          _1tyh2 = zy8lu['getQName'](hy_61z),
          ubw8e = $si9f['createAttributeNS'](bxw, _1tyh2);this['locator'] && vgqpv(zy8lu['getLocator'](hy_61z), ubw8e), ubw8e['value'] = ubw8e['nodeValue'] = bu8lze, j0dm['setAttributeNode'](ubw8e);
    }
  }, 'endElement': function () {
    {
      var y1lhz6 = this['currentElement'];y1lhz6['tagName'];
    }this['currentElement'] = y1lhz6['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (sif9r$, d0mjca) {
    var vk75x = this['doc']['createProcessingInstruction'](sif9r$, d0mjca);this['locator'] && vgqpv(this['locator'], vk75x), vuhl(this, vk75x);
  }, 'ignorableWhitespace': function () {}, 'characters': function (n2_4) {
    if (n2_4 = vgqb8['apply'](this, arguments)) {
      if (this['cdata']) var wpx5vg = this['doc']['createCDATASection'](n2_4);else var wpx5vg = this['doc']['createTextNode'](n2_4);this['currentElement'] ? this['currentElement']['appendChild'](wpx5vg) : /^\s*$/['test'](n2_4) && this['doc']['appendChild'](wpx5vg), this['locator'] && vgqpv(this['locator'], wpx5vg);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (t1nh_) {
    (this['locator'] = t1nh_) && (t1nh_['lineNumber'] = 0x0);
  }, 'comment': function (wbe8gq) {
    wbe8gq = vgqb8['apply'](this, arguments);var kdc0j = this['doc']['createComment'](wbe8gq);this['locator'] && vgqpv(this['locator'], kdc0j), vuhl(this, kdc0j);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ckm0, m0jcdk, l8bezu) {
    var d7k0c = this['doc']['implementation'];if (d7k0c && d7k0c['createDocumentType']) {
      var _y21t = d7k0c['createDocumentType'](ckm0, m0jcdk, l8bezu);this['locator'] && vgqpv(this['locator'], _y21t), vuhl(this, _y21t);
    }
  }, 'warning': function (kx57v) {
    console['warn']('[xmldom warning]\t' + kx57v, vmd7ck0(this['locator']));
  }, 'error': function (pexw) {
    console['error']('[xmldom error]\t' + pexw, vmd7ck0(this['locator']));
  }, 'fatalError': function (qvxgpw) {
    throw console['error']('[xmldom fatalError]\t' + qvxgpw, vmd7ck0(this['locator'])), qvxgpw;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (z8ble) {
  vfsir$9['prototype'][z8ble] = function () {
    return null;
  };
});var v$4osn3 = require('./vv12vv')['XMLReader'],
    vofis$ = exports['DOMImplementation'] = require('./vvDOvv')['DOMImplementation'];exports['XMLSerializer'] = require('./vvDOvv')['XMLSerializer'], exports['DOMParser'] = veqgw8;