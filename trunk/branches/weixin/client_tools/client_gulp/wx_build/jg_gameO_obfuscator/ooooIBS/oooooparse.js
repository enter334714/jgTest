var c = wx.$o;
function o_vl63an(o4zh) {
  this['options'] = o4zh || { 'locator': {} };
}function o_qs5tm(adi62, rhcp8, yu0ek_) {
  function cprzh8(aid62) {
    var y_enuk = adi62[aid62];!y_enuk && pm && (y_enuk = 0x2 == adi62['length'] ? function (vad62l) {
      adi62(aid62, vad62l);
    } : adi62), ej$0ky[aid62] = y_enuk && function (vu_3ln) {
      y_enuk('[xmldom ' + aid62 + ']\t' + vu_3ln + o_f4gw(yu0ek_));
    } || function () {};
  }if (!adi62) {
    if (rhcp8 instanceof o_ky$_0e) return rhcp8;adi62 = rhcp8;
  }var ej$0ky = {},
      pm = adi62 instanceof Function;return yu0ek_ = yu0ek_ || {}, cprzh8('warning'), cprzh8('error'), cprzh8('fatalError'), ej$0ky;
}function o_ky$_0e() {
  this['cdata'] = !0x1;
}function o_cz8prh(g94fw, prm85c) {
  prm85c['lineNumber'] = g94fw['lineNumber'], prm85c['columnNumber'] = g94fw['columnNumber'];
}function o_f4gw(e3yun) {
  return e3yun ? '\x0a@' + (e3yun['systemId'] || '') + '#[line:' + e3yun['lineNumber'] + ',col:' + e3yun['columnNumber'] + ']' : void 0x0;
}function o_ai2ld6(d3l6va, pc8rzm, r5pqt) {
  return 'string' == typeof d3l6va ? d3l6va['substr'](pc8rzm, r5pqt) : d3l6va['length'] >= pc8rzm + r5pqt || pc8rzm ? new java['lang']['String'](d3l6va, pc8rzm, r5pqt) + '' : d3l6va;
}function o_m7tq(e$_ky0, n3a6lv) {
  e$_ky0['currentElement'] ? e$_ky0['currentElement']['appendChild'](n3a6lv) : e$_ky0['doc']['appendChild'](n3a6lv);
}o_vl63an['prototype']['parseFromString'] = function ($0kjey, w9xi) {
  var zchbo8 = this['options'],
      fg9xw = new o_mczpr8(),
      x4fw9g = zchbo8['domBuilder'] || new o_ky$_0e(),
      g4bxh = zchbo8['errorHandler'],
      _yvun = zchbo8['locator'],
      g9oxb = zchbo8['xmlns'] || {},
      unavl = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return _yvun && x4fw9g['setDocumentLocator'](_yvun), fg9xw['errorHandler'] = o_qs5tm(g4bxh, x4fw9g, _yvun), fg9xw['domBuilder'] = zchbo8['domBuilder'] || x4fw9g, /\/x?html?$/['test'](w9xi) && (unavl['nbsp'] = '\u00a0', unavl['copy'] = '©', g9oxb[''] = 'http://www.w3.org/1999/xhtml'), g9oxb['xml'] = g9oxb['xml'] || 'http://www.w3.org/XML/1998/namespace', $0kjey ? fg9xw['parse']($0kjey, g9oxb, unavl) : fg9xw['errorHandler']['error']('invalid doc source'), x4fw9g['doc'];
}, o_ky$_0e['prototype'] = { 'startDocument': function () {
    this['doc'] = new o_prm8c()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (eykn_, rzmpc, eknu_y, pc5mtr) {
    var t5mpcr = this['doc'],
        e3uny = t5mpcr['createElementNS'](eykn_, eknu_y || rzmpc),
        crmzp8 = pc5mtr['length'];o_m7tq(this, e3uny), this['currentElement'] = e3uny, this['locator'] && o_cz8prh(this['locator'], e3uny);for (var ohbxg = 0x0; crmzp8 > ohbxg; ohbxg++) {
      var eykn_ = pc5mtr['getURI'](ohbxg),
          b8ochz = pc5mtr['getValue'](ohbxg),
          eknu_y = pc5mtr['getQName'](ohbxg),
          p8cmr = t5mpcr['createAttributeNS'](eykn_, eknu_y);this['locator'] && o_cz8prh(pc5mtr['getLocator'](ohbxg), p8cmr), p8cmr['value'] = p8cmr['nodeValue'] = b8ochz, e3uny['setAttributeNode'](p8cmr);
    }
  }, 'endElement': function () {
    {
      var n_3vy = this['currentElement'];n_3vy['tagName'];
    }this['currentElement'] = n_3vy['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (bzc8h, _0e$y) {
    var hczo8 = this['doc']['createProcessingInstruction'](bzc8h, _0e$y);this['locator'] && o_cz8prh(this['locator'], hczo8), o_m7tq(this, hczo8);
  }, 'ignorableWhitespace': function () {}, 'characters': function (k0y$e_) {
    if (k0y$e_ = o_ai2ld6['apply'](this, arguments)) {
      if (this['cdata']) var c8o = this['doc']['createCDATASection'](k0y$e_);else var c8o = this['doc']['createTextNode'](k0y$e_);this['currentElement'] ? this['currentElement']['appendChild'](c8o) : /^\s*$/['test'](k0y$e_) && this['doc']['appendChild'](c8o), this['locator'] && o_cz8prh(this['locator'], c8o);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (k_0y$e) {
    (this['locator'] = k_0y$e) && (k_0y$e['lineNumber'] = 0x0);
  }, 'comment': function (la3vnu) {
    la3vnu = o_ai2ld6['apply'](this, arguments);var i26dl = this['doc']['createComment'](la3vnu);this['locator'] && o_cz8prh(this['locator'], i26dl), o_m7tq(this, i26dl);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (keu_0y, n3uvl_, k$yje0) {
    var str5m = this['doc']['implementation'];if (str5m && str5m['createDocumentType']) {
      var ogh4bx = str5m['createDocumentType'](keu_0y, n3uvl_, k$yje0);this['locator'] && o_cz8prh(this['locator'], ogh4bx), o_m7tq(this, ogh4bx);
    }
  }, 'warning': function (w21di6) {
    console['warn']('[xmldom warning]\t' + w21di6, o_f4gw(this['locator']));
  }, 'error': function (pr58) {
    console['error']('[xmldom error]\t' + pr58, o_f4gw(this['locator']));
  }, 'fatalError': function (chrz8p) {
    throw console['error']('[xmldom fatalError]\t' + chrz8p, o_f4gw(this['locator'])), chrz8p;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (p5crm8) {
  o_ky$_0e['prototype'][p5crm8] = function () {
    return null;
  };
});var o_mczpr8 = require('./oooSAX')['XMLReader'],
    o_prm8c = exports['DOMImplementation'] = require('./ooooDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./ooooDOM')['XMLSerializer'], exports['DOMParser'] = o_vl63an;