var g = wx.$Q;
function q_em69o(mj41) {
  this['options'] = mj41 || { 'locator': {} };
}function q_m9on(yk3t5x, erd$_z, uwqs) {
  function en$9_(kdzr) {
    var y20x3 = yk3t5x[kdzr];!y20x3 && zd$tr && (y20x3 = 0x2 == yk3t5x['length'] ? function (zrckt) {
      yk3t5x(kdzr, zrckt);
    } : yk3t5x), o946n[kdzr] = y20x3 ? function (bgilv) {
      y20x3('[xmldom ' + kdzr + ']\t' + bgilv + q_ilabgp(uwqs));
    } : function () {};
  }if (!yk3t5x) {
    if (erd$_z instanceof q_yx325) return erd$_z;yk3t5x = erd$_z;
  }var o946n = {},
      zd$tr = yk3t5x instanceof Function;return uwqs = uwqs || {}, en$9_('warning'), en$9_('error'), en$9_('fatalError'), o946n;
}function q_yx325() {
  this['cdata'] = !0x1;
}function q_ib7gv(dc$_r, j8uswh) {
  j8uswh['lineNumber'] = dc$_r['lineNumber'], j8uswh['columnNumber'] = dc$_r['columnNumber'];
}function q_ilabgp(swu8jq) {
  return swu8jq ? '\x0a@' + (swu8jq['systemId'] || '') + '#[line:' + swu8jq['lineNumber'] + ',col:' + swu8jq['columnNumber'] + ']' : void 0x0;
}function q_y50x32(afgbp, zcrdkt, m4n1o6) {
  return 'string' == typeof afgbp ? afgbp['substr'](zcrdkt, m4n1o6) : afgbp['length'] >= zcrdkt + m4n1o6 || zcrdkt ? new java['lang']['String'](afgbp, zcrdkt, m4n1o6) + '' : afgbp;
}function q_m416o(xfpl0, kcdy5t) {
  (xfpl0['currentElement'] || xfpl0['doc'])['appendChild'](kcdy5t);
}q_em69o['prototype']['parseFromString'] = function (ez$_, kdrtyc) {
  var dt$rzc = this['options'],
      ckty5 = new q_t3yxk5(),
      kzr = dt$rzc['domBuilder'] || new q_yx325(),
      rzktc = dt$rzc['errorHandler'],
      n9_eo6 = dt$rzc['locator'],
      y3k = dt$rzc['xmlns'] || {},
      _ez9$ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return n9_eo6 && kzr['setDocumentLocator'](n9_eo6), ckty5['errorHandler'] = q_m9on(rzktc, kzr, n9_eo6), ckty5['domBuilder'] = dt$rzc['domBuilder'] || kzr, /\/x?html?$/['test'](kdrtyc) && (_ez9$['nbsp'] = '\u00a0', _ez9$['copy'] = '©', y3k[''] = 'http://www.w3.org/1999/xhtml'), y3k['xml'] = y3k['xml'] || 'http://www.w3.org/XML/1998/namespace', ez$_ ? ckty5['parse'](ez$_, y3k, _ez9$) : ckty5['errorHandler']['error']('invalid doc source'), kzr['doc'];
}, q_yx325['prototype'] = { 'startDocument': function () {
    this['doc'] = new q_h4js81()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (dtryc, bgvali, m9n64, $_9eno) {
    var tzc$rd = this['doc'],
        ktcydr = tzc$rd['createElementNS'](dtryc, m9n64 || bgvali),
        r_z$d = $_9eno['length'];q_m416o(this, ktcydr), this['currentElement'] = ktcydr, this['locator'] && q_ib7gv(this['locator'], ktcydr);for (var j148mh = 0x0; j148mh < r_z$d; j148mh++) {
      var dtryc = $_9eno['getURI'](j148mh),
          l0fxp = $_9eno['getValue'](j148mh),
          m9n64 = $_9eno['getQName'](j148mh),
          y2x35 = tzc$rd['createAttributeNS'](dtryc, m9n64);this['locator'] && q_ib7gv($_9eno['getLocator'](j148mh), y2x35), y2x35['value'] = y2x35['nodeValue'] = l0fxp, ktcydr['setAttributeNode'](y2x35);
    }
  }, 'endElement': function () {
    var bgf = this['currentElement'];bgf['tagName'], this['currentElement'] = bgf['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (blfap, sw8quj) {
    blfap = this['doc']['createProcessingInstruction'](blfap, sw8quj), (this['locator'] && q_ib7gv(this['locator'], blfap), q_m416o(this, blfap));
  }, 'ignorableWhitespace': function () {}, 'characters': function (v7igab) {
    var pfa20l;(v7igab = q_y50x32['apply'](this, arguments)) && (pfa20l = this['cdata'] ? this['doc']['createCDATASection'](v7igab) : this['doc']['createTextNode'](v7igab), this['currentElement'] ? this['currentElement']['appendChild'](pfa20l) : /^\s*$/['test'](v7igab) && this['doc']['appendChild'](pfa20l), this['locator'] && q_ib7gv(this['locator'], pfa20l));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function ($czdt) {
    (this['locator'] = $czdt) && ($czdt['lineNumber'] = 0x0);
  }, 'comment': function (moe96n) {
    moe96n = q_y50x32['apply'](this, arguments);var d$_c = this['doc']['createComment'](moe96n);this['locator'] && q_ib7gv(this['locator'], d$_c), q_m416o(this, d$_c);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (xpf2l, aiglbp, bagvi7) {
    var $rcz_ = this['doc']['implementation'];$rcz_ && $rcz_['createDocumentType'] && ($rcz_ = $rcz_['createDocumentType'](xpf2l, aiglbp, bagvi7), this['locator'] && q_ib7gv(this['locator'], $rcz_), q_m416o(this, $rcz_));
  }, 'warning': function (tz$cr) {
    console['warn']('[xmldom warning]\t' + tz$cr, q_ilabgp(this['locator']));
  }, 'error': function (h8jm) {
    console['error']('[xmldom error]\t' + h8jm, q_ilabgp(this['locator']));
  }, 'fatalError': function (b7gv) {
    throw console['error']('[xmldom fatalError]\t' + b7gv, q_ilabgp(this['locator'])), b7gv;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (hmj1) {
  q_yx325['prototype'][hmj1] = function () {
    return null;
  };
});var q_t3yxk5 = require('./qS12q')['XMLReader'],
    q_h4js81 = exports['DOMImplementation'] = require('./qqDOMq')['DOMImplementation'];exports['XMLSerializer'] = require('./qqDOMq')['XMLSerializer'], exports['DOMParser'] = q_em69o;