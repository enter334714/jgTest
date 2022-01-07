var D = wx.$b;
function bo8ls6(rp_h2) {
  this['options'] = rp_h2 || { 'locator': {} };
}function bwvh1_p(rds982, s9r82_, $a4e) {
  function mz0ui(x7gqk3) {
    var yizu = rds982[x7gqk3];!yizu && v2h9r_ && (yizu = 0x2 == rds982['length'] ? function (fj54a$) {
      rds982(x7gqk3, fj54a$);
    } : rds982), vr9_2h[x7gqk3] = yizu && function (sr8) {
      yizu('[xmldom ' + x7gqk3 + ']\t' + sr8 + btwvcp($a4e));
    } || function () {};
  }if (!rds982) {
    if (s9r82_ instanceof biytzm) return s9r82_;rds982 = s9r82_;
  }var vr9_2h = {},
      v2h9r_ = rds982 instanceof Function;return $a4e = $a4e || {}, mz0ui('warning'), mz0ui('error'), mz0ui('fatalError'), vr9_2h;
}function biytzm() {
  this['cdata'] = !0x1;
}function bj504n(a54e, o6sdl) {
  o6sdl['lineNumber'] = a54e['lineNumber'], o6sdl['columnNumber'] = a54e['columnNumber'];
}function btwvcp(zycmt) {
  return zycmt ? '\x0a@' + (zycmt['systemId'] || '') + '#[line:' + zycmt['lineNumber'] + ',col:' + zycmt['columnNumber'] + ']' : void 0x0;
}function bcw1vph(w2pvh_, $ef45a, vwcph1) {
  return 'string' == typeof w2pvh_ ? w2pvh_['substr']($ef45a, vwcph1) : w2pvh_['length'] >= $ef45a + vwcph1 || $ef45a ? new java['lang']['String'](w2pvh_, $ef45a, vwcph1) + '' : w2pvh_;
}function bhwp2v(c1ztw, iu4jn) {
  c1ztw['currentElement'] ? c1ztw['currentElement']['appendChild'](iu4jn) : c1ztw['doc']['appendChild'](iu4jn);
}bo8ls6['prototype']['parseFromString'] = function (ptc, rh9v_) {
  var dslo6 = this['options'],
      yzutmi = new bt1mcwz(),
      fae54$ = dslo6['domBuilder'] || new biytzm(),
      wp1chv = dslo6['errorHandler'],
      wvp2_ = dslo6['locator'],
      h_wp2v = dslo6['xmlns'] || {},
      hv2p_ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return wvp2_ && fae54$['setDocumentLocator'](wvp2_), yzutmi['errorHandler'] = bwvh1_p(wp1chv, fae54$, wvp2_), yzutmi['domBuilder'] = dslo6['domBuilder'] || fae54$, /\/x?html?$/['test'](rh9v_) && (hv2p_['nbsp'] = '\u00a0', hv2p_['copy'] = '©', h_wp2v[''] = 'http://www.w3.org/1999/xhtml'), h_wp2v['xml'] = h_wp2v['xml'] || 'http://www.w3.org/XML/1998/namespace', ptc ? yzutmi['parse'](ptc, h_wp2v, hv2p_) : yzutmi['errorHandler']['error']('invalid doc source'), fae54$['doc'];
}, biytzm['prototype'] = { 'startDocument': function () {
    this['doc'] = new bzm1()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ymti, uztyim, k86lod, phw_1v) {
    var $4aj5 = this['doc'],
        o8dl6k = $4aj5['createElementNS'](ymti, k86lod || uztyim),
        n54ji = phw_1v['length'];bhwp2v(this, o8dl6k), this['currentElement'] = o8dl6k, this['locator'] && bj504n(this['locator'], o8dl6k);for (var yj0nui = 0x0; n54ji > yj0nui; yj0nui++) {
      var ymti = phw_1v['getURI'](yj0nui),
          shr_2 = phw_1v['getValue'](yj0nui),
          k86lod = phw_1v['getQName'](yj0nui),
          fa4j$5 = $4aj5['createAttributeNS'](ymti, k86lod);this['locator'] && bj504n(phw_1v['getLocator'](yj0nui), fa4j$5), fa4j$5['value'] = fa4j$5['nodeValue'] = shr_2, o8dl6k['setAttributeNode'](fa4j$5);
    }
  }, 'endElement': function () {
    {
      var s98d2 = this['currentElement'];s98d2['tagName'];
    }this['currentElement'] = s98d2['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (u0yz, sr68d9) {
    var mwz1c = this['doc']['createProcessingInstruction'](u0yz, sr68d9);this['locator'] && bj504n(this['locator'], mwz1c), bhwp2v(this, mwz1c);
  }, 'ignorableWhitespace': function () {}, 'characters': function (s6do98) {
    if (s6do98 = bcw1vph['apply'](this, arguments)) {
      if (this['cdata']) var j045i = this['doc']['createCDATASection'](s6do98);else var j045i = this['doc']['createTextNode'](s6do98);this['currentElement'] ? this['currentElement']['appendChild'](j045i) : /^\s*$/['test'](s6do98) && this['doc']['appendChild'](j045i), this['locator'] && bj504n(this['locator'], j045i);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (a5e4) {
    (this['locator'] = a5e4) && (a5e4['lineNumber'] = 0x0);
  }, 'comment': function (nj054i) {
    nj054i = bcw1vph['apply'](this, arguments);var mtzc1 = this['doc']['createComment'](nj054i);this['locator'] && bj504n(this['locator'], mtzc1), bhwp2v(this, mtzc1);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (dr2s8, tp1wm, u0zymi) {
    var umyzct = this['doc']['implementation'];if (umyzct && umyzct['createDocumentType']) {
      var nu0ji4 = umyzct['createDocumentType'](dr2s8, tp1wm, u0zymi);this['locator'] && bj504n(this['locator'], nu0ji4), bhwp2v(this, nu0ji4);
    }
  }, 'warning': function (v2_r9) {
    console['warn']('[xmldom warning]\t' + v2_r9, btwvcp(this['locator']));
  }, 'error': function (pvwtc1) {
    console['error']('[xmldom error]\t' + pvwtc1, btwvcp(this['locator']));
  }, 'fatalError': function (_vp1) {
    throw console['error']('[xmldom fatalError]\t' + _vp1, btwvcp(this['locator'])), _vp1;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (hpvw_2) {
  biytzm['prototype'][hpvw_2] = function () {
    return null;
  };
});var bt1mcwz = require('./BBcBB')['XMLReader'],
    bzm1 = exports['DOMImplementation'] = require('./BBDOBB')['DOMImplementation'];exports['XMLSerializer'] = require('./BBDOBB')['XMLSerializer'], exports['DOMParser'] = bo8ls6;