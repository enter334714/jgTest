var c = wx.$o;
function o_a62lid(yke_n) {
  this['options'] = yke_n || { 'locator': {} };
}function o_xf49(rp8c5m, rqts5m, l36a) {
  function zcrm8p(xf94go) {
    var ofg = rp8c5m[xf94go];!ofg && ye$0k && (ofg = 0x2 == rp8c5m['length'] ? function (v62) {
      rp8c5m(xf94go, v62);
    } : rp8c5m), fw19x4[xf94go] = ofg && function (phrz) {
      ofg('[xmldom ' + xf94go + ']\t' + phrz + o_t5qm7s(l36a));
    } || function () {};
  }if (!rp8c5m) {
    if (rqts5m instanceof o_qt7sm) return rqts5m;rp8c5m = rqts5m;
  }var fw19x4 = {},
      ye$0k = rp8c5m instanceof Function;return l36a = l36a || {}, zcrm8p('warning'), zcrm8p('error'), zcrm8p('fatalError'), fw19x4;
}function o_qt7sm() {
  this['cdata'] = !0x1;
}function o_lvanu3(avd26, adl36v) {
  adl36v['lineNumber'] = avd26['lineNumber'], adl36v['columnNumber'] = avd26['columnNumber'];
}function o_t5qm7s(u3en_) {
  return u3en_ ? '\x0a@' + (u3en_['systemId'] || '') + '#[line:' + u3en_['lineNumber'] + ',col:' + u3en_['columnNumber'] + ']' : void 0x0;
}function o_pmr8(iw126d, z8bhco, keyun) {
  return 'string' == typeof iw126d ? iw126d['substr'](z8bhco, keyun) : iw126d['length'] >= z8bhco + keyun || z8bhco ? new java['lang']['String'](iw126d, z8bhco, keyun) + '' : iw126d;
}function o_ch8boz(b8hpc, l3nauv) {
  b8hpc['currentElement'] ? b8hpc['currentElement']['appendChild'](l3nauv) : b8hpc['doc']['appendChild'](l3nauv);
}o_a62lid['prototype']['parseFromString'] = function (a26i, va26) {
  var hg4obx = this['options'],
      nuy_3e = new o_aln3v6(),
      gfo4x = hg4obx['domBuilder'] || new o_qt7sm(),
      bg4oh = hg4obx['errorHandler'],
      idla26 = hg4obx['locator'],
      s5qmt7 = hg4obx['xmlns'] || {},
      mq5trp = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return idla26 && gfo4x['setDocumentLocator'](idla26), nuy_3e['errorHandler'] = o_xf49(bg4oh, gfo4x, idla26), nuy_3e['domBuilder'] = hg4obx['domBuilder'] || gfo4x, /\/x?html?$/['test'](va26) && (mq5trp['nbsp'] = '\u00a0', mq5trp['copy'] = '©', s5qmt7[''] = 'http://www.w3.org/1999/xhtml'), s5qmt7['xml'] = s5qmt7['xml'] || 'http://www.w3.org/XML/1998/namespace', a26i ? nuy_3e['parse'](a26i, s5qmt7, mq5trp) : nuy_3e['errorHandler']['error']('invalid doc source'), gfo4x['doc'];
}, o_qt7sm['prototype'] = { 'startDocument': function () {
    this['doc'] = new o_bg4hox()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (l3v6a, jkye0, fdi21w, g8bo) {
    var va3lun = this['doc'],
        zhg4ob = va3lun['createElementNS'](l3v6a, fdi21w || jkye0),
        nalu = g8bo['length'];o_ch8boz(this, zhg4ob), this['currentElement'] = zhg4ob, this['locator'] && o_lvanu3(this['locator'], zhg4ob);for (var _ynke = 0x0; nalu > _ynke; _ynke++) {
      var l3v6a = g8bo['getURI'](_ynke),
          y_enk = g8bo['getValue'](_ynke),
          fdi21w = g8bo['getQName'](_ynke),
          ue3n = va3lun['createAttributeNS'](l3v6a, fdi21w);this['locator'] && o_lvanu3(g8bo['getLocator'](_ynke), ue3n), ue3n['value'] = ue3n['nodeValue'] = y_enk, zhg4ob['setAttributeNode'](ue3n);
    }
  }, 'endElement': function () {
    {
      var i126a = this['currentElement'];i126a['tagName'];
    }this['currentElement'] = i126a['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (c8hoz, bzc) {
    var _yeu0k = this['doc']['createProcessingInstruction'](c8hoz, bzc);this['locator'] && o_lvanu3(this['locator'], _yeu0k), o_ch8boz(this, _yeu0k);
  }, 'ignorableWhitespace': function () {}, 'characters': function (anv3lu) {
    if (anv3lu = o_pmr8['apply'](this, arguments)) {
      if (this['cdata']) var uynv3 = this['doc']['createCDATASection'](anv3lu);else var uynv3 = this['doc']['createTextNode'](anv3lu);this['currentElement'] ? this['currentElement']['appendChild'](uynv3) : /^\s*$/['test'](anv3lu) && this['doc']['appendChild'](uynv3), this['locator'] && o_lvanu3(this['locator'], uynv3);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (pmqt5r) {
    (this['locator'] = pmqt5r) && (pmqt5r['lineNumber'] = 0x0);
  }, 'comment': function (_nulv3) {
    _nulv3 = o_pmr8['apply'](this, arguments);var r5p8m = this['doc']['createComment'](_nulv3);this['locator'] && o_lvanu3(this['locator'], r5p8m), o_ch8boz(this, r5p8m);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (h4ozgb, bhzc, vna3) {
    var tqpm = this['doc']['implementation'];if (tqpm && tqpm['createDocumentType']) {
      var uk_0ey = tqpm['createDocumentType'](h4ozgb, bhzc, vna3);this['locator'] && o_lvanu3(this['locator'], uk_0ey), o_ch8boz(this, uk_0ey);
    }
  }, 'warning': function (g4hob) {
    console['warn']('[xmldom warning]\t' + g4hob, o_t5qm7s(this['locator']));
  }, 'error': function (rt5sq) {
    console['error']('[xmldom error]\t' + rt5sq, o_t5qm7s(this['locator']));
  }, 'fatalError': function (b4ohx) {
    throw console['error']('[xmldom fatalError]\t' + b4ohx, o_t5qm7s(this['locator'])), b4ohx;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (c8ohb) {
  o_qt7sm['prototype'][c8ohb] = function () {
    return null;
  };
});var o_aln3v6 = require('./oooSAX')['XMLReader'],
    o_bg4hox = exports['DOMImplementation'] = require('./ooooDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./ooooDOM')['XMLSerializer'], exports['DOMParser'] = o_a62lid;