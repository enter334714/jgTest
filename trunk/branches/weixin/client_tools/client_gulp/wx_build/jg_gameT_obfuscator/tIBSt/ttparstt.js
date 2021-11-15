var M = wx.$T;
function tz7foeq(bkjas) {
  this['options'] = bkjas || { 'locator': {} };
}function tg16n(b3n, jagbrn, ubaksj) {
  function $p9v(jgn38) {
    var $zdvpf = b3n[jgn38];!$zdvpf && zdpv$f && ($zdvpf = 0x2 == b3n['length'] ? function (d7$fz) {
      b3n(jgn38, d7$fz);
    } : b3n), cvti2[jgn38] = $zdvpf && function (v$zpfd) {
      $zdvpf('[xmldom ' + jgn38 + ']\t' + v$zpfd + tjraks(ubaksj));
    } || function () {};
  }if (!b3n) {
    if (jagbrn instanceof tc9$) return jagbrn;b3n = jagbrn;
  }var cvti2 = {},
      zdpv$f = b3n instanceof Function;return ubaksj = ubaksj || {}, $p9v('warning'), $p9v('error'), $p9v('fatalError'), cvti2;
}function tc9$() {
  this['cdata'] = !0x1;
}function tsrjakb(kusba, y0qoxe) {
  y0qoxe['lineNumber'] = kusba['lineNumber'], y0qoxe['columnNumber'] = kusba['columnNumber'];
}function tjraks(ngr318) {
  return ngr318 ? '\x0a@' + (ngr318['systemId'] || '') + '#[line:' + ngr318['lineNumber'] + ',col:' + ngr318['columnNumber'] + ']' : void 0x0;
}function txm0_yh(_56hwm, hwm5y, eyxo) {
  return 'string' == typeof _56hwm ? _56hwm['substr'](hwm5y, eyxo) : _56hwm['length'] >= hwm5y + eyxo || hwm5y ? new java['lang']['String'](_56hwm, hwm5y, eyxo) + '' : _56hwm;
}function tyeo0qx(cvdi$9, t2c9i) {
  cvdi$9['currentElement'] ? cvdi$9['currentElement']['appendChild'](t2c9i) : cvdi$9['doc']['appendChild'](t2c9i);
}tz7foeq['prototype']['parseFromString'] = function (hw615, pdzfv$) {
  var ymq0 = this['options'],
      _wm = new tcid$v9(),
      krasjb = ymq0['domBuilder'] || new tc9$(),
      nragjb = ymq0['errorHandler'],
      vzp$f = ymq0['locator'],
      jbng = ymq0['xmlns'] || {},
      wh_ym = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return vzp$f && krasjb['setDocumentLocator'](vzp$f), _wm['errorHandler'] = tg16n(nragjb, krasjb, vzp$f), _wm['domBuilder'] = ymq0['domBuilder'] || krasjb, /\/x?html?$/['test'](pdzfv$) && (wh_ym['nbsp'] = '\u00a0', wh_ym['copy'] = '©', jbng[''] = 'http://www.w3.org/1999/xhtml'), jbng['xml'] = jbng['xml'] || 'http://www.w3.org/XML/1998/namespace', hw615 ? _wm['parse'](hw615, jbng, wh_ym) : _wm['errorHandler']['error']('invalid doc source'), krasjb['doc'];
}, tc9$['prototype'] = { 'startDocument': function () {
    this['doc'] = new tc49ti2()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (p$iv9d, bkusj, mh_0y, pzdf7o) {
    var ymw_h5 = this['doc'],
        jrb3gn = ymw_h5['createElementNS'](p$iv9d, mh_0y || bkusj),
        ukajbs = pzdf7o['length'];tyeo0qx(this, jrb3gn), this['currentElement'] = jrb3gn, this['locator'] && tsrjakb(this['locator'], jrb3gn);for (var it924 = 0x0; ukajbs > it924; it924++) {
      var p$iv9d = pzdf7o['getURI'](it924),
          ym_w5 = pzdf7o['getValue'](it924),
          mh_0y = pzdf7o['getQName'](it924),
          oy0x = ymw_h5['createAttributeNS'](p$iv9d, mh_0y);this['locator'] && tsrjakb(pzdf7o['getLocator'](it924), oy0x), oy0x['value'] = oy0x['nodeValue'] = ym_w5, jrb3gn['setAttributeNode'](oy0x);
    }
  }, 'endElement': function () {
    {
      var fodzp7 = this['currentElement'];fodzp7['tagName'];
    }this['currentElement'] = fodzp7['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (xo0q7e, wyxh_) {
    var z7peo = this['doc']['createProcessingInstruction'](xo0q7e, wyxh_);this['locator'] && tsrjakb(this['locator'], z7peo), tyeo0qx(this, z7peo);
  }, 'ignorableWhitespace': function () {}, 'characters': function (gn6831) {
    if (gn6831 = txm0_yh['apply'](this, arguments)) {
      if (this['cdata']) var krsaj = this['doc']['createCDATASection'](gn6831);else var krsaj = this['doc']['createTextNode'](gn6831);this['currentElement'] ? this['currentElement']['appendChild'](krsaj) : /^\s*$/['test'](gn6831) && this['doc']['appendChild'](krsaj), this['locator'] && tsrjakb(this['locator'], krsaj);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (v$c9t) {
    (this['locator'] = v$c9t) && (v$c9t['lineNumber'] = 0x0);
  }, 'comment': function (pi$9) {
    pi$9 = txm0_yh['apply'](this, arguments);var hm_wy5 = this['doc']['createComment'](pi$9);this['locator'] && tsrjakb(this['locator'], hm_wy5), tyeo0qx(this, hm_wy5);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (_mxqy0, rj3nbg, qoe0x) {
    var efopz = this['doc']['implementation'];if (efopz && efopz['createDocumentType']) {
      var pf7ezo = efopz['createDocumentType'](_mxqy0, rj3nbg, qoe0x);this['locator'] && tsrjakb(this['locator'], pf7ezo), tyeo0qx(this, pf7ezo);
    }
  }, 'warning': function (oz7eq) {
    console['warn']('[xmldom warning]\t' + oz7eq, tjraks(this['locator']));
  }, 'error': function (podf7z) {
    console['error']('[xmldom error]\t' + podf7z, tjraks(this['locator']));
  }, 'fatalError': function (h_56) {
    throw console['error']('[xmldom fatalError]\t' + h_56, tjraks(this['locator'])), h_56;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (vtc9$) {
  tc9$['prototype'][vtc9$] = function () {
    return null;
  };
});var tcid$v9 = require('./tT12tt')['XMLReader'],
    tc49ti2 = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = tz7foeq;