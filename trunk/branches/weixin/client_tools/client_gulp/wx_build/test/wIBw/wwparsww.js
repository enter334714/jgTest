var s = wx.$W;
function wqspm4(i1732z) {
  this['options'] = i1732z || { 'locator': {} };
}function wa_9$vl($l9yv, gkxbrd, uh60pt) {
  function pm64(spm4q6) {
    var zf1jew = $l9yv[spm4q6];!zf1jew && kybrdx && (zf1jew = 0x2 == $l9yv['length'] ? function (osfwn) {
      $l9yv(spm4q6, osfwn);
    } : $l9yv), v9xay$[spm4q6] = zf1jew && function (vyxa9) {
      zf1jew('[xmldom ' + spm4q6 + ']\t' + vyxa9 + wtuph80(uh60pt));
    } || function () {};
  }if (!$l9yv) {
    if (gkxbrd instanceof wwosn) return gkxbrd;$l9yv = gkxbrd;
  }var v9xay$ = {},
      kybrdx = $l9yv instanceof Function;return uh60pt = uh60pt || {}, pm64('warning'), pm64('error'), pm64('fatalError'), v9xay$;
}function wwosn() {
  this['cdata'] = !0x1;
}function whtp4(y$l9v, m6sqo4) {
  m6sqo4['lineNumber'] = y$l9v['lineNumber'], m6sqo4['columnNumber'] = y$l9v['columnNumber'];
}function wtuph80($x9ay) {
  return $x9ay ? '\x0a@' + ($x9ay['systemId'] || '') + '#[line:' + $x9ay['lineNumber'] + ',col:' + $x9ay['columnNumber'] + ']' : void 0x0;
}function wcu0(krgxb, wqnos, u4ph6t) {
  return 'string' == typeof krgxb ? krgxb['substr'](wqnos, u4ph6t) : krgxb['length'] >= wqnos + u4ph6t || wqnos ? new java['lang']['String'](krgxb, wqnos, u4ph6t) + '' : krgxb;
}function wwfznej(thup08, oms) {
  thup08['currentElement'] ? thup08['currentElement']['appendChild'](oms) : thup08['doc']['appendChild'](oms);
}wqspm4['prototype']['parseFromString'] = function (c5dk, rx$dya) {
  var ez21f3 = this['options'],
      krdgcb = new wqom4n(),
      fzejn = ez21f3['domBuilder'] || new wwosn(),
      jwnoms = ez21f3['errorHandler'],
      kgrdcb = ez21f3['locator'],
      kb5c = ez21f3['xmlns'] || {},
      ayv9x$ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return kgrdcb && fzejn['setDocumentLocator'](kgrdcb), krdgcb['errorHandler'] = wa_9$vl(jwnoms, fzejn, kgrdcb), krdgcb['domBuilder'] = ez21f3['domBuilder'] || fzejn, /\/x?html?$/['test'](rx$dya) && (ayv9x$['nbsp'] = '\u00a0', ayv9x$['copy'] = '©', kb5c[''] = 'http://www.w3.org/1999/xhtml'), kb5c['xml'] = kb5c['xml'] || 'http://www.w3.org/XML/1998/namespace', c5dk ? krdgcb['parse'](c5dk, kb5c, ayv9x$) : krdgcb['errorHandler']['error']('invalid doc source'), fzejn['doc'];
}, wwosn['prototype'] = { 'startDocument': function () {
    this['doc'] = new womq46()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (th508, t805gc, dbgcr, jnsomw) {
    var iz312 = this['doc'],
        dbrgc = iz312['createElementNS'](th508, dbgcr || t805gc),
        kgb8c = jnsomw['length'];wwfznej(this, dbrgc), this['currentElement'] = dbrgc, this['locator'] && whtp4(this['locator'], dbrgc);for (var ayrx$ = 0x0; kgb8c > ayrx$; ayrx$++) {
      var th508 = jnsomw['getURI'](ayrx$),
          $ryxv = jnsomw['getValue'](ayrx$),
          dbgcr = jnsomw['getQName'](ayrx$),
          nom4s = iz312['createAttributeNS'](th508, dbgcr);this['locator'] && whtp4(jnsomw['getLocator'](ayrx$), nom4s), nom4s['value'] = nom4s['nodeValue'] = $ryxv, dbrgc['setAttributeNode'](nom4s);
    }
  }, 'endElement': function () {
    {
      var n4mqos = this['currentElement'];n4mqos['tagName'];
    }this['currentElement'] = n4mqos['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (rgbd, lv9y$a) {
    var fnjow = this['doc']['createProcessingInstruction'](rgbd, lv9y$a);this['locator'] && whtp4(this['locator'], fnjow), wwfznej(this, fnjow);
  }, 'ignorableWhitespace': function () {}, 'characters': function (xav9$y) {
    if (xav9$y = wcu0['apply'](this, arguments)) {
      if (this['cdata']) var dcbrkg = this['doc']['createCDATASection'](xav9$y);else var dcbrkg = this['doc']['createTextNode'](xav9$y);this['currentElement'] ? this['currentElement']['appendChild'](dcbrkg) : /^\s*$/['test'](xav9$y) && this['doc']['appendChild'](dcbrkg), this['locator'] && whtp4(this['locator'], dcbrkg);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (jwns) {
    (this['locator'] = jwns) && (jwns['lineNumber'] = 0x0);
  }, 'comment': function (z13) {
    z13 = wcu0['apply'](this, arguments);var krx = this['doc']['createComment'](z13);this['locator'] && whtp4(this['locator'], krx), wwfznej(this, krx);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (gbckdr, t85c0, wofjsn) {
    var c5k8b = this['doc']['implementation'];if (c5k8b && c5k8b['createDocumentType']) {
      var d5bkgc = c5k8b['createDocumentType'](gbckdr, t85c0, wofjsn);this['locator'] && whtp4(this['locator'], d5bkgc), wwfznej(this, d5bkgc);
    }
  }, 'warning': function (jswonm) {
    console['warn']('[xmldom warning]\t' + jswonm, wtuph80(this['locator']));
  }, 'error': function (xavr$) {
    console['error']('[xmldom error]\t' + xavr$, wtuph80(this['locator']));
  }, 'fatalError': function (p6q4uh) {
    throw console['error']('[xmldom fatalError]\t' + p6q4uh, wtuph80(this['locator'])), p6q4uh;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (av$9_) {
  wwosn['prototype'][av$9_] = function () {
    return null;
  };
});var wqom4n = require('./wwqww')['XMLReader'],
    womq46 = exports['DOMImplementation'] = require('./wwDOww')['DOMImplementation'];exports['XMLSerializer'] = require('./wwDOww')['XMLSerializer'], exports['DOMParser'] = wqspm4;