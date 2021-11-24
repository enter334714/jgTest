var c = wx.$o;
function o_tmp5r(s7tm) {
  this['options'] = s7tm || { 'locator': {} };
}function o_q5mtr(m85r, ek0j, lunv) {
  function wf914x(phcb8) {
    var lv6 = m85r[phcb8];!lv6 && u_kney && (lv6 = 0x2 == m85r['length'] ? function (gbzoh) {
      m85r(phcb8, gbzoh);
    } : m85r), yu3_nv[phcb8] = lv6 && function (w1i92) {
      lv6('[xmldom ' + phcb8 + ']\t' + w1i92 + o_v3dla(lunv));
    } || function () {};
  }if (!m85r) {
    if (ek0j instanceof o_mrqst5) return ek0j;m85r = ek0j;
  }var yu3_nv = {},
      u_kney = m85r instanceof Function;return lunv = lunv || {}, wf914x('warning'), wf914x('error'), wf914x('fatalError'), yu3_nv;
}function o_mrqst5() {
  this['cdata'] = !0x1;
}function o_b8zcho(z4hb, vl3ad6) {
  vl3ad6['lineNumber'] = z4hb['lineNumber'], vl3ad6['columnNumber'] = z4hb['columnNumber'];
}function o_v3dla(nlav3) {
  return nlav3 ? '\x0a@' + (nlav3['systemId'] || '') + '#[line:' + nlav3['lineNumber'] + ',col:' + nlav3['columnNumber'] + ']' : void 0x0;
}function o_iw2d1(hxb, bgx9o, ail26) {
  return 'string' == typeof hxb ? hxb['substr'](bgx9o, ail26) : hxb['length'] >= bgx9o + ail26 || bgx9o ? new java['lang']['String'](hxb, bgx9o, ail26) + '' : hxb;
}function o_iw2d16(zm8pc, y0ke$) {
  zm8pc['currentElement'] ? zm8pc['currentElement']['appendChild'](y0ke$) : zm8pc['doc']['appendChild'](y0ke$);
}o_tmp5r['prototype']['parseFromString'] = function ($0kej, _ky0ue) {
  var va2dl = this['options'],
      l3_n = new o_tsqm75(),
      van = va2dl['domBuilder'] || new o_mrqst5(),
      kj0ye$ = va2dl['errorHandler'],
      rqmp5 = va2dl['locator'],
      n3_vl = va2dl['xmlns'] || {},
      fiwd = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return rqmp5 && van['setDocumentLocator'](rqmp5), l3_n['errorHandler'] = o_q5mtr(kj0ye$, van, rqmp5), l3_n['domBuilder'] = va2dl['domBuilder'] || van, /\/x?html?$/['test'](_ky0ue) && (fiwd['nbsp'] = '\u00a0', fiwd['copy'] = '©', n3_vl[''] = 'http://www.w3.org/1999/xhtml'), n3_vl['xml'] = n3_vl['xml'] || 'http://www.w3.org/XML/1998/namespace', $0kej ? l3_n['parse']($0kej, n3_vl, fiwd) : l3_n['errorHandler']['error']('invalid doc source'), van['doc'];
}, o_mrqst5['prototype'] = { 'startDocument': function () {
    this['doc'] = new o_ey3u_()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (gob9x, yu_ke0, _uky0e, crp8z) {
    var cbohz8 = this['doc'],
        va6n = cbohz8['createElementNS'](gob9x, _uky0e || yu_ke0),
        p5mrq = crp8z['length'];o_iw2d16(this, va6n), this['currentElement'] = va6n, this['locator'] && o_b8zcho(this['locator'], va6n);for (var qmptr = 0x0; p5mrq > qmptr; qmptr++) {
      var gob9x = crp8z['getURI'](qmptr),
          w129i = crp8z['getValue'](qmptr),
          _uky0e = crp8z['getQName'](qmptr),
          lda26 = cbohz8['createAttributeNS'](gob9x, _uky0e);this['locator'] && o_b8zcho(crp8z['getLocator'](qmptr), lda26), lda26['value'] = lda26['nodeValue'] = w129i, va6n['setAttributeNode'](lda26);
    }
  }, 'endElement': function () {
    {
      var iw1df2 = this['currentElement'];iw1df2['tagName'];
    }this['currentElement'] = iw1df2['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (k0ey_u, kyn_ue) {
    var f9w1xi = this['doc']['createProcessingInstruction'](k0ey_u, kyn_ue);this['locator'] && o_b8zcho(this['locator'], f9w1xi), o_iw2d16(this, f9w1xi);
  }, 'ignorableWhitespace': function () {}, 'characters': function (v3ynu_) {
    if (v3ynu_ = o_iw2d1['apply'](this, arguments)) {
      if (this['cdata']) var _$eky = this['doc']['createCDATASection'](v3ynu_);else var _$eky = this['doc']['createTextNode'](v3ynu_);this['currentElement'] ? this['currentElement']['appendChild'](_$eky) : /^\s*$/['test'](v3ynu_) && this['doc']['appendChild'](_$eky), this['locator'] && o_b8zcho(this['locator'], _$eky);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (u_en3) {
    (this['locator'] = u_en3) && (u_en3['lineNumber'] = 0x0);
  }, 'comment': function (mrpqt) {
    mrpqt = o_iw2d1['apply'](this, arguments);var p8mz = this['doc']['createComment'](mrpqt);this['locator'] && o_b8zcho(this['locator'], p8mz), o_iw2d16(this, p8mz);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ky0j$, nyu_e, oxgb4) {
    var ts5m = this['doc']['implementation'];if (ts5m && ts5m['createDocumentType']) {
      var n3_yeu = ts5m['createDocumentType'](ky0j$, nyu_e, oxgb4);this['locator'] && o_b8zcho(this['locator'], n3_yeu), o_iw2d16(this, n3_yeu);
    }
  }, 'warning': function (knuy_e) {
    console['warn']('[xmldom warning]\t' + knuy_e, o_v3dla(this['locator']));
  }, 'error': function (idal2) {
    console['error']('[xmldom error]\t' + idal2, o_v3dla(this['locator']));
  }, 'fatalError': function (l62dv) {
    throw console['error']('[xmldom fatalError]\t' + l62dv, o_v3dla(this['locator'])), l62dv;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (hz8rpc) {
  o_mrqst5['prototype'][hz8rpc] = function () {
    return null;
  };
});var o_tsqm75 = require('./oooSAX')['XMLReader'],
    o_ey3u_ = exports['DOMImplementation'] = require('./ooooDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./ooooDOM')['XMLSerializer'], exports['DOMParser'] = o_tmp5r;