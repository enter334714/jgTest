var v = wx.$d;
function zh29db6w(wb692) {
  this['options'] = wb692 || { 'locator': {} };
}function zpznl_7(qvicfg, ol5$n, on$0e5) {
  function f38q4v(akrj5yo) {
    var oe$5ln = qvicfg[akrj5yo];!oe$5ln && crgvai && (oe$5ln = 0x2 == qvicfg['length'] ? function (b96d2) {
      qvicfg(akrj5yo, b96d2);
    } : qvicfg), iqv3ft8[akrj5yo] = oe$5ln ? function (nzle0_) {
      oe$5ln('[xmldom ' + akrj5yo + ']\t' + nzle0_ + zhpz7d(on$0e5));
    } : function () {};
  }if (!qvicfg) {
    if (ol5$n instanceof zh29bw6) return ol5$n;qvicfg = ol5$n;
  }var iqv3ft8 = {},
      crgvai = qvicfg instanceof Function;return on$0e5 = on$0e5 || {}, f38q4v('warning'), f38q4v('error'), f38q4v('fatalError'), iqv3ft8;
}function zh29bw6() {
  this['cdata'] = !0x1;
}function zrcjgiya(ykjoa, c8giraj) {
  c8giraj['lineNumber'] = ykjoa['lineNumber'], c8giraj['columnNumber'] = ykjoa['columnNumber'];
}function zhpz7d(kgyarjc) {
  return kgyarjc ? '\x0a@' + (kgyarjc['systemId'] || '') + '#[line:' + kgyarjc['lineNumber'] + ',col:' + kgyarjc['columnNumber'] + ']' : void 0x0;
}function zi8t3(fgqitv, e5n$ol0, yokj$e) {
  return 'string' == typeof fgqitv ? fgqitv['substr'](e5n$ol0, yokj$e) : fgqitv['length'] >= e5n$ol0 + yokj$e || e5n$ol0 ? new java['lang']['String'](fgqitv, e5n$ol0, yokj$e) + '' : fgqitv;
}function zvqt3if8(eo0lnx$, y$ko5rj) {
  (eo0lnx$['currentElement'] || eo0lnx$['doc'])['appendChild'](y$ko5rj);
}zh29db6w['prototype']['parseFromString'] = function (z_xw7ph, xeln_0z) {
  var x_w7pn = this['options'],
      tf3m4vq = new zxe0l(),
      jr5$ok = x_w7pn['domBuilder'] || new zh29bw6(),
      e$nox0l = x_w7pn['errorHandler'],
      zp_ = x_w7pn['locator'],
      tvq3m4f = x_w7pn['xmlns'] || {},
      en0$lo = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return zp_ && jr5$ok['setDocumentLocator'](zp_), tf3m4vq['errorHandler'] = zpznl_7(e$nox0l, jr5$ok, zp_), tf3m4vq['domBuilder'] = x_w7pn['domBuilder'] || jr5$ok, /\/x?html?$/['test'](xeln_0z) && (en0$lo['nbsp'] = '\u00a0', en0$lo['copy'] = '©', tvq3m4f[''] = 'http://www.w3.org/1999/xhtml'), tvq3m4f['xml'] = tvq3m4f['xml'] || 'http://www.w3.org/XML/1998/namespace', z_xw7ph ? tf3m4vq['parse'](z_xw7ph, tvq3m4f, en0$lo) : tf3m4vq['errorHandler']['error']('invalid doc source'), jr5$ok['doc'];
}, zh29bw6['prototype'] = { 'startDocument': function () {
    this['doc'] = new zicvg8ar()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (oj$5k, t13fm4q, lezx0_n, r5ayko) {
    var zpwd7_h = this['doc'],
        ek0o$l5 = zpwd7_h['createElementNS'](oj$5k, lezx0_n || t13fm4q),
        dhb276 = r5ayko['length'];zvqt3if8(this, ek0o$l5), this['currentElement'] = ek0o$l5, this['locator'] && zrcjgiya(this['locator'], ek0o$l5);for (var fmq431t = 0x0; fmq431t < dhb276; fmq431t++) {
      var oj$5k = r5ayko['getURI'](fmq431t),
          gr8acij = r5ayko['getValue'](fmq431t),
          lezx0_n = r5ayko['getQName'](fmq431t),
          cgi8jr = zpwd7_h['createAttributeNS'](oj$5k, lezx0_n);this['locator'] && zrcjgiya(r5ayko['getLocator'](fmq431t), cgi8jr), cgi8jr['value'] = cgi8jr['nodeValue'] = gr8acij, ek0o$l5['setAttributeNode'](cgi8jr);
    }
  }, 'endElement': function () {
    var cigvqf8 = this['currentElement'];cigvqf8['tagName'], this['currentElement'] = cigvqf8['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (zp_0xl, e5kl$0o) {
    e5kl$0o = this['doc']['createProcessingInstruction'](zp_0xl, e5kl$0o), (this['locator'] && zrcjgiya(this['locator'], e5kl$0o), zvqt3if8(this, e5kl$0o));
  }, 'ignorableWhitespace': function () {}, 'characters': function (yokr$j) {
    var pxw7nz;(yokr$j = zi8t3['apply'](this, arguments)) && (pxw7nz = this['cdata'] ? this['doc']['createCDATASection'](yokr$j) : this['doc']['createTextNode'](yokr$j), this['currentElement'] ? this['currentElement']['appendChild'](pxw7nz) : /^\s*$/['test'](yokr$j) && this['doc']['appendChild'](pxw7nz), this['locator'] && zrcjgiya(this['locator'], pxw7nz));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ykc5arj) {
    (this['locator'] = ykc5arj) && (ykc5arj['lineNumber'] = 0x0);
  }, 'comment': function (b7zpdhw) {
    b7zpdhw = zi8t3['apply'](this, arguments);var _0elxn = this['doc']['createComment'](b7zpdhw);this['locator'] && zrcjgiya(this['locator'], _0elxn), zvqt3if8(this, _0elxn);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (iqtfv83, wz7dh_p, x$l0oen) {
    var n5eol$ = this['doc']['implementation'];n5eol$ && n5eol$['createDocumentType'] && (x$l0oen = n5eol$['createDocumentType'](iqtfv83, wz7dh_p, x$l0oen), this['locator'] && zrcjgiya(this['locator'], x$l0oen), zvqt3if8(this, x$l0oen));
  }, 'warning': function (o$jrk5y) {
    console['warn']('[xmldom warning]\t' + o$jrk5y, zhpz7d(this['locator']));
  }, 'error': function (zp_lx7n) {
    console['error']('[xmldom error]\t' + zp_lx7n, zhpz7d(this['locator']));
  }, 'fatalError': function (racji8g) {
    throw console['error']('[xmldom fatalError]\t' + racji8g, zhpz7d(this['locator'])), racji8g;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (w69d2h) {
  zh29bw6['prototype'][w69d2h] = function () {
    return null;
  };
});var zxe0l = require('./dddsax')['XMLReader'],
    zicvg8ar = exports['DOMImplementation'] = require('./ddddom')['DOMImplementation'];exports['XMLSerializer'] = require('./ddddom')['XMLSerializer'], exports['DOMParser'] = zh29db6w;