var p = wx.$h;
function a_cs8rt($hc_sw) {
  this['options'] = $hc_sw || { 'locator': {} };
}function a_pj$6h($wjhsa, p9y5e, omn03g) {
  function c8r_t(jy965p) {
    var py659e = $wjhsa[jy965p];!py659e && ap$hj6 && (py659e = 0x2 == $wjhsa['length'] ? function ($ap96j) {
      $wjhsa(jy965p, $ap96j);
    } : $wjhsa), j6aw$[jy965p] = py659e ? function (ileb) {
      py659e('[xmldom ' + jy965p + ']\t' + ileb + a_k247(omn03g));
    } : function () {};
  }if (!$wjhsa) {
    if (p9y5e instanceof a__h$wsc) return p9y5e;$wjhsa = p9y5e;
  }var j6aw$ = {},
      ap$hj6 = $wjhsa instanceof Function;return omn03g = omn03g || {}, c8r_t('warning'), c8r_t('error'), c8r_t('fatalError'), j6aw$;
}function a__h$wsc() {
  this['cdata'] = !0x1;
}function a_e596yp(ye5lbk, wsh_c$) {
  wsh_c$['lineNumber'] = ye5lbk['lineNumber'], wsh_c$['columnNumber'] = ye5lbk['columnNumber'];
}function a_k247(ja6h$) {
  return ja6h$ ? '\x0a@' + (ja6h$['systemId'] || '') + '#[line:' + ja6h$['lineNumber'] + ',col:' + ja6h$['columnNumber'] + ']' : void 0x0;
}function a_s_$cw(bl4, liekby, w_$) {
  return 'string' == typeof bl4 ? bl4['substr'](liekby, w_$) : bl4['length'] >= liekby + w_$ || liekby ? new java['lang']['String'](bl4, liekby, w_$) + '' : bl4;
}function a_$jp6a9(q1xvfz, wh$jas) {
  (q1xvfz['currentElement'] || q1xvfz['doc'])['appendChild'](wh$jas);
}a_cs8rt['prototype']['parseFromString'] = function (p5y9be, l9be5y) {
  var pa6h$ = this['options'],
      $cwa = new a_lkeybi(),
      kn24i = pa6h$['domBuilder'] || new a__h$wsc(),
      _r8cts = pa6h$['errorHandler'],
      cha = pa6h$['locator'],
      gom13 = pa6h$['xmlns'] || {},
      $ha6wj = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return cha && kn24i['setDocumentLocator'](cha), $cwa['errorHandler'] = a_pj$6h(_r8cts, kn24i, cha), $cwa['domBuilder'] = pa6h$['domBuilder'] || kn24i, /\/x?html?$/['test'](l9be5y) && ($ha6wj['nbsp'] = '\u00a0', $ha6wj['copy'] = '©', gom13[''] = 'http://www.w3.org/1999/xhtml'), gom13['xml'] = gom13['xml'] || 'http://www.w3.org/XML/1998/namespace', p5y9be ? $cwa['parse'](p5y9be, gom13, $ha6wj) : $cwa['errorHandler']['error']('invalid doc source'), kn24i['doc'];
}, a__h$wsc['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_w$h6a()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function ($aj6hw, lybie, hc_tsw, twsc_h) {
    var pajh = this['doc'],
        g3o1m = pajh['createElementNS']($aj6hw, hc_tsw || lybie),
        n203g7 = twsc_h['length'];a_$jp6a9(this, g3o1m), this['currentElement'] = g3o1m, this['locator'] && a_e596yp(this['locator'], g3o1m);for (var vo3gm1 = 0x0; vo3gm1 < n203g7; vo3gm1++) {
      var $aj6hw = twsc_h['getURI'](vo3gm1),
          c_trs8 = twsc_h['getValue'](vo3gm1),
          hc_tsw = twsc_h['getQName'](vo3gm1),
          xvo31 = pajh['createAttributeNS']($aj6hw, hc_tsw);this['locator'] && a_e596yp(twsc_h['getLocator'](vo3gm1), xvo31), xvo31['value'] = xvo31['nodeValue'] = c_trs8, g3o1m['setAttributeNode'](xvo31);
    }
  }, 'endElement': function () {
    var b2il4k = this['currentElement'];b2il4k['tagName'], this['currentElement'] = b2il4k['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (swtr, ilk24b) {
    ilk24b = this['doc']['createProcessingInstruction'](swtr, ilk24b), (this['locator'] && a_e596yp(this['locator'], ilk24b), a_$jp6a9(this, ilk24b));
  }, 'ignorableWhitespace': function () {}, 'characters': function (omg3v) {
    var o0mg;(omg3v = a_s_$cw['apply'](this, arguments)) && (o0mg = this['cdata'] ? this['doc']['createCDATASection'](omg3v) : this['doc']['createTextNode'](omg3v), this['currentElement'] ? this['currentElement']['appendChild'](o0mg) : /^\s*$/['test'](omg3v) && this['doc']['appendChild'](o0mg), this['locator'] && a_e596yp(this['locator'], o0mg));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (rc8_t) {
    (this['locator'] = rc8_t) && (rc8_t['lineNumber'] = 0x0);
  }, 'comment': function (tc_dr) {
    tc_dr = a_s_$cw['apply'](this, arguments);var _cdtr8 = this['doc']['createComment'](tc_dr);this['locator'] && a_e596yp(this['locator'], _cdtr8), a_$jp6a9(this, _cdtr8);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (a5jp9, sc8tr, ybel59) {
    var ik47l2 = this['doc']['implementation'];ik47l2 && ik47l2['createDocumentType'] && (ybel59 = ik47l2['createDocumentType'](a5jp9, sc8tr, ybel59), this['locator'] && a_e596yp(this['locator'], ybel59), a_$jp6a9(this, ybel59));
  }, 'warning': function (be5ylk) {
    console['warn']('[xmldom warning]\t' + be5ylk, a_k247(this['locator']));
  }, 'error': function (ovxq) {
    console['error']('[xmldom error]\t' + ovxq, a_k247(this['locator']));
  }, 'fatalError': function (yibkle) {
    throw console['error']('[xmldom fatalError]\t' + yibkle, a_k247(this['locator'])), yibkle;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (qxvm1) {
  a__h$wsc['prototype'][qxvm1] = function () {
    return null;
  };
});var a_lkeybi = require('./cccsax')['XMLReader'],
    a_w$h6a = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_cs8rt;