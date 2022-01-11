var G = wx.$G;
function ax2hciy(_e$3q8) {
  this['options'] = _e$3q8 || { 'locator': {} };
}function aybixtn(rq_$e3, yjc, _e$sm) {
  function tbmxzn(fa5k4) {
    var ko5d4 = rq_$e3[fa5k4];!ko5d4 && mxztb && (ko5d4 = 0x2 == rq_$e3['length'] ? function (rzmbn) {
      rq_$e3(fa5k4, rzmbn);
    } : rq_$e3), e$rq3_[fa5k4] = ko5d4 && function (sm$r) {
      ko5d4('[xmldom ' + fa5k4 + ']\t' + sm$r + au1w0p(_e$sm));
    } || function () {};
  }if (!rq_$e3) {
    if (yjc instanceof amtxb) return yjc;rq_$e3 = yjc;
  }var e$rq3_ = {},
      mxztb = rq_$e3 instanceof Function;return _e$sm = _e$sm || {}, tbmxzn('warning'), tbmxzn('error'), tbmxzn('fatalError'), e$rq3_;
}function amtxb() {
  this['cdata'] = !0x1;
}function au0pw1o(y2xci, znbmr) {
  znbmr['lineNumber'] = y2xci['lineNumber'], znbmr['columnNumber'] = y2xci['columnNumber'];
}function au1w0p(ers$_) {
  return ers$_ ? '\x0a@' + (ers$_['systemId'] || '') + '#[line:' + ers$_['lineNumber'] + ',col:' + ers$_['columnNumber'] + ']' : void 0x0;
}function awp0u1o(srbmnz, e$qs_, r_mzs$) {
  return 'string' == typeof srbmnz ? srbmnz['substr'](e$qs_, r_mzs$) : srbmnz['length'] >= e$qs_ + r_mzs$ || e$qs_ ? new java['lang']['String'](srbmnz, e$qs_, r_mzs$) + '' : srbmnz;
}function a_$zmr(p1u09w, q3re) {
  p1u09w['currentElement'] ? p1u09w['currentElement']['appendChild'](q3re) : p1u09w['doc']['appendChild'](q3re);
}ax2hciy['prototype']['parseFromString'] = function (ud4fo, s_$qer) {
  var rnbsmz = this['options'],
      q8e6 = new ax2iyht(),
      v45ak = rnbsmz['domBuilder'] || new amtxb(),
      $res_m = rnbsmz['errorHandler'],
      udo14w = rnbsmz['locator'],
      bxynit = rnbsmz['xmlns'] || {},
      k5f4a = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return udo14w && v45ak['setDocumentLocator'](udo14w), q8e6['errorHandler'] = aybixtn($res_m, v45ak, udo14w), q8e6['domBuilder'] = rnbsmz['domBuilder'] || v45ak, /\/x?html?$/['test'](s_$qer) && (k5f4a['nbsp'] = '\u00a0', k5f4a['copy'] = '©', bxynit[''] = 'http://www.w3.org/1999/xhtml'), bxynit['xml'] = bxynit['xml'] || 'http://www.w3.org/XML/1998/namespace', ud4fo ? q8e6['parse'](ud4fo, bxynit, k5f4a) : q8e6['errorHandler']['error']('invalid doc source'), v45ak['doc'];
}, amtxb['prototype'] = { 'startDocument': function () {
    this['doc'] = new ahyxib()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (o1u4df, v67kla, $3_e8, k5va67) {
    var o41df = this['doc'],
        fo5du4 = o41df['createElementNS'](o1u4df, $3_e8 || v67kla),
        erq$3 = k5va67['length'];a_$zmr(this, fo5du4), this['currentElement'] = fo5du4, this['locator'] && au0pw1o(this['locator'], fo5du4);for (var ow0p = 0x0; erq$3 > ow0p; ow0p++) {
      var o1u4df = k5va67['getURI'](ow0p),
          wp0ou1 = k5va67['getValue'](ow0p),
          $3_e8 = k5va67['getQName'](ow0p),
          _3eqr = o41df['createAttributeNS'](o1u4df, $3_e8);this['locator'] && au0pw1o(k5va67['getLocator'](ow0p), _3eqr), _3eqr['value'] = _3eqr['nodeValue'] = wp0ou1, fo5du4['setAttributeNode'](_3eqr);
    }
  }, 'endElement': function () {
    {
      var yibt = this['currentElement'];yibt['tagName'];
    }this['currentElement'] = yibt['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (xbth, w4o1du) {
    var nzbm = this['doc']['createProcessingInstruction'](xbth, w4o1du);this['locator'] && au0pw1o(this['locator'], nzbm), a_$zmr(this, nzbm);
  }, 'ignorableWhitespace': function () {}, 'characters': function (nsrzbm) {
    if (nsrzbm = awp0u1o['apply'](this, arguments)) {
      if (this['cdata']) var $qres = this['doc']['createCDATASection'](nsrzbm);else var $qres = this['doc']['createTextNode'](nsrzbm);this['currentElement'] ? this['currentElement']['appendChild']($qres) : /^\s*$/['test'](nsrzbm) && this['doc']['appendChild']($qres), this['locator'] && au0pw1o(this['locator'], $qres);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (bintz) {
    (this['locator'] = bintz) && (bintz['lineNumber'] = 0x0);
  }, 'comment': function (o1dwu4) {
    o1dwu4 = awp0u1o['apply'](this, arguments);var _rsq$ = this['doc']['createComment'](o1dwu4);this['locator'] && au0pw1o(this['locator'], _rsq$), a_$zmr(this, _rsq$);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (mtx, ixhbt, srnzb) {
    var d4of5u = this['doc']['implementation'];if (d4of5u && d4of5u['createDocumentType']) {
      var $q3_r = d4of5u['createDocumentType'](mtx, ixhbt, srnzb);this['locator'] && au0pw1o(this['locator'], $q3_r), a_$zmr(this, $q3_r);
    }
  }, 'warning': function (a5k7v) {
    console['warn']('[xmldom warning]\t' + a5k7v, au1w0p(this['locator']));
  }, 'error': function (k5v7a) {
    console['error']('[xmldom error]\t' + k5v7a, au1w0p(this['locator']));
  }, 'fatalError': function (vlk67) {
    throw console['error']('[xmldom fatalError]\t' + vlk67, au1w0p(this['locator'])), vlk67;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (itxnzb) {
  amtxb['prototype'][itxnzb] = function () {
    return null;
  };
});var ax2iyht = require('./z888z888cz888z888')['XMLReader'],
    ahyxib = exports['DOMImplementation'] = require('./z888z888DOz888z888')['DOMImplementation'];exports['XMLSerializer'] = require('./z888z888DOz888z888')['XMLSerializer'], exports['DOMParser'] = ax2hciy;