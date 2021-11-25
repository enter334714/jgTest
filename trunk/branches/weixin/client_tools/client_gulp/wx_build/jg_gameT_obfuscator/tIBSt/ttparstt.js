var M = wx.$T;
function tn561(opzfd7) {
  this['options'] = opzfd7 || { 'locator': {} };
}function txq_m0y(g168n3, efo7zq, rjakbg) {
  function eqox(krbag) {
    var hm6w5 = g168n3[krbag];!hm6w5 && jksbu && (hm6w5 = 0x2 == g168n3['length'] ? function (pfzd7$) {
      g168n3(krbag, pfzd7$);
    } : g168n3), zofe7p[krbag] = hm6w5 && function (dzfp7o) {
      hm6w5('[xmldom ' + krbag + ']\t' + dzfp7o + tjr3ng(rjakbg));
    } || function () {};
  }if (!g168n3) {
    if (efo7zq instanceof tpzdv$f) return efo7zq;g168n3 = efo7zq;
  }var zofe7p = {},
      jksbu = g168n3 instanceof Function;return rjakbg = rjakbg || {}, eqox('warning'), eqox('error'), eqox('fatalError'), zofe7p;
}function tpzdv$f() {
  this['cdata'] = !0x1;
}function td9iv$(q0yx_m, qy_mx0) {
  qy_mx0['lineNumber'] = q0yx_m['lineNumber'], qy_mx0['columnNumber'] = q0yx_m['columnNumber'];
}function tjr3ng(v$f9) {
  return v$f9 ? '\x0a@' + (v$f9['systemId'] || '') + '#[line:' + v$f9['lineNumber'] + ',col:' + v$f9['columnNumber'] + ']' : void 0x0;
}function tarjbs(grn8j3, ras, dcv9$i) {
  return 'string' == typeof grn8j3 ? grn8j3['substr'](ras, dcv9$i) : grn8j3['length'] >= ras + dcv9$i || ras ? new java['lang']['String'](grn8j3, ras, dcv9$i) + '' : grn8j3;
}function te0xoy(wm16, od7fzp) {
  wm16['currentElement'] ? wm16['currentElement']['appendChild'](od7fzp) : wm16['doc']['appendChild'](od7fzp);
}tn561['prototype']['parseFromString'] = function (wymhx_, fvdpz) {
  var hm_xyw = this['options'],
      $di9v = new toexq07(),
      rn3jb = hm_xyw['domBuilder'] || new tpzdv$f(),
      feqo = hm_xyw['errorHandler'],
      jrbkag = hm_xyw['locator'],
      krjgb = hm_xyw['xmlns'] || {},
      h81w65 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return jrbkag && rn3jb['setDocumentLocator'](jrbkag), $di9v['errorHandler'] = txq_m0y(feqo, rn3jb, jrbkag), $di9v['domBuilder'] = hm_xyw['domBuilder'] || rn3jb, /\/x?html?$/['test'](fvdpz) && (h81w65['nbsp'] = '\u00a0', h81w65['copy'] = '©', krjgb[''] = 'http://www.w3.org/1999/xhtml'), krjgb['xml'] = krjgb['xml'] || 'http://www.w3.org/XML/1998/namespace', wymhx_ ? $di9v['parse'](wymhx_, krjgb, h81w65) : $di9v['errorHandler']['error']('invalid doc source'), rn3jb['doc'];
}, tpzdv$f['prototype'] = { 'startDocument': function () {
    this['doc'] = new tzfdpo7()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (vci9$, ct2iv9, dfoz7p, gbkj) {
    var _wyh5 = this['doc'],
        zo7 = _wyh5['createElementNS'](vci9$, dfoz7p || ct2iv9),
        kajrs = gbkj['length'];te0xoy(this, zo7), this['currentElement'] = zo7, this['locator'] && td9iv$(this['locator'], zo7);for (var _myw5 = 0x0; kajrs > _myw5; _myw5++) {
      var vci9$ = gbkj['getURI'](_myw5),
          oyexq0 = gbkj['getValue'](_myw5),
          dfoz7p = gbkj['getQName'](_myw5),
          dfpzv = _wyh5['createAttributeNS'](vci9$, dfoz7p);this['locator'] && td9iv$(gbkj['getLocator'](_myw5), dfpzv), dfpzv['value'] = dfpzv['nodeValue'] = oyexq0, zo7['setAttributeNode'](dfpzv);
    }
  }, 'endElement': function () {
    {
      var nr83j = this['currentElement'];nr83j['tagName'];
    }this['currentElement'] = nr83j['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (eofq7z, of7zqe) {
    var i9$cd = this['doc']['createProcessingInstruction'](eofq7z, of7zqe);this['locator'] && td9iv$(this['locator'], i9$cd), te0xoy(this, i9$cd);
  }, 'ignorableWhitespace': function () {}, 'characters': function (j3rbng) {
    if (j3rbng = tarjbs['apply'](this, arguments)) {
      if (this['cdata']) var mx_0qy = this['doc']['createCDATASection'](j3rbng);else var mx_0qy = this['doc']['createTextNode'](j3rbng);this['currentElement'] ? this['currentElement']['appendChild'](mx_0qy) : /^\s*$/['test'](j3rbng) && this['doc']['appendChild'](mx_0qy), this['locator'] && td9iv$(this['locator'], mx_0qy);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (n3158) {
    (this['locator'] = n3158) && (n3158['lineNumber'] = 0x0);
  }, 'comment': function (f$dvz) {
    f$dvz = tarjbs['apply'](this, arguments);var fzpe7o = this['doc']['createComment'](f$dvz);this['locator'] && td9iv$(this['locator'], fzpe7o), te0xoy(this, fzpe7o);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (jgrk, rjkbag, _hm6w5) {
    var brgnaj = this['doc']['implementation'];if (brgnaj && brgnaj['createDocumentType']) {
      var x0mq_y = brgnaj['createDocumentType'](jgrk, rjkbag, _hm6w5);this['locator'] && td9iv$(this['locator'], x0mq_y), te0xoy(this, x0mq_y);
    }
  }, 'warning': function (sjrk) {
    console['warn']('[xmldom warning]\t' + sjrk, tjr3ng(this['locator']));
  }, 'error': function (oex0y) {
    console['error']('[xmldom error]\t' + oex0y, tjr3ng(this['locator']));
  }, 'fatalError': function (t4c2il) {
    throw console['error']('[xmldom fatalError]\t' + t4c2il, tjr3ng(this['locator'])), t4c2il;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (qo0exy) {
  tpzdv$f['prototype'][qo0exy] = function () {
    return null;
  };
});var toexq07 = require('./tT12tt')['XMLReader'],
    tzfdpo7 = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = tn561;