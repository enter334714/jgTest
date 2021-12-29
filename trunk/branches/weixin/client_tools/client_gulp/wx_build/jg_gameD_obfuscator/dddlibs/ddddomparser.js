var v = wx.$d;
function zzb80xa(z8abx) {
  this['options'] = z8abx || { 'locator': {} };
}function zuifkd(fgtkq0, kdft, r1$pwv) {
  function ed6mhi(r81$xw) {
    var bgz0a = fgtkq0[r81$xw];!bgz0a && ieh && (bgz0a = 0x2 == fgtkq0['length'] ? function (nc_349) {
      fgtkq0(r81$xw, nc_349);
    } : fgtkq0), mej6h[r81$xw] = bgz0a && function (jn46m) {
      bgz0a('[xmldom ' + r81$xw + ']\t' + jn46m + zufgikt(r1$pwv));
    } || function () {};
  }if (!fgtkq0) {
    if (kdft instanceof zx1w8b) return kdft;fgtkq0 = kdft;
  }var mej6h = {},
      ieh = fgtkq0 instanceof Function;return r1$pwv = r1$pwv || {}, ed6mhi('warning'), ed6mhi('error'), ed6mhi('fatalError'), mej6h;
}function zx1w8b() {
  this['cdata'] = !0x1;
}function za8x1r($vyl, udikt) {
  udikt['lineNumber'] = $vyl['lineNumber'], udikt['columnNumber'] = $vyl['columnNumber'];
}function zufgikt(a0qbz) {
  return a0qbz ? '\x0a@' + (a0qbz['systemId'] || '') + '#[line:' + a0qbz['lineNumber'] + ',col:' + a0qbz['columnNumber'] + ']' : void 0x0;
}function zj4hn6_(vl, ugtf, tumie) {
  return 'string' == typeof vl ? vl['substr'](ugtf, tumie) : vl['length'] >= ugtf + tumie || ugtf ? new java['lang']['String'](vl, ugtf, tumie) + '' : vl;
}function zdi6ume(tfkug, x1r8$) {
  tfkug['currentElement'] ? tfkug['currentElement']['appendChild'](x1r8$) : tfkug['doc']['appendChild'](x1r8$);
}zzb80xa['prototype']['parseFromString'] = function (iue6d, p$vw7) {
  var q0zabx = this['options'],
      dkfiut = new ztium(),
      deuft = q0zabx['domBuilder'] || new zx1w8b(),
      gf0tq = q0zabx['errorHandler'],
      p$wv7r = q0zabx['locator'],
      mi6dhe = q0zabx['xmlns'] || {},
      bx1a8 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return p$wv7r && deuft['setDocumentLocator'](p$wv7r), dkfiut['errorHandler'] = zuifkd(gf0tq, deuft, p$wv7r), dkfiut['domBuilder'] = q0zabx['domBuilder'] || deuft, /\/x?html?$/['test'](p$vw7) && (bx1a8['nbsp'] = '\u00a0', bx1a8['copy'] = '©', mi6dhe[''] = 'http://www.w3.org/1999/xhtml'), mi6dhe['xml'] = mi6dhe['xml'] || 'http://www.w3.org/XML/1998/namespace', iue6d ? dkfiut['parse'](iue6d, mi6dhe, bx1a8) : dkfiut['errorHandler']['error']('invalid doc source'), deuft['doc'];
}, zx1w8b['prototype'] = { 'startDocument': function () {
    this['doc'] = new zpw1r$()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (miudet, _3cn94, ftg, $py7v) {
    var kgzq0a = this['doc'],
        tqgf = kgzq0a['createElementNS'](miudet, ftg || _3cn94),
        bzgq = $py7v['length'];zdi6ume(this, tqgf), this['currentElement'] = tqgf, this['locator'] && za8x1r(this['locator'], tqgf);for (var fq0ktg = 0x0; bzgq > fq0ktg; fq0ktg++) {
      var miudet = $py7v['getURI'](fq0ktg),
          _4cn39 = $py7v['getValue'](fq0ktg),
          ftg = $py7v['getQName'](fq0ktg),
          o932c = kgzq0a['createAttributeNS'](miudet, ftg);this['locator'] && za8x1r($py7v['getLocator'](fq0ktg), o932c), o932c['value'] = o932c['nodeValue'] = _4cn39, tqgf['setAttributeNode'](o932c);
    }
  }, 'endElement': function () {
    {
      var a0qxz = this['currentElement'];a0qxz['tagName'];
    }this['currentElement'] = a0qxz['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (xzabq0, qg0t) {
    var c9_o35 = this['doc']['createProcessingInstruction'](xzabq0, qg0t);this['locator'] && za8x1r(this['locator'], c9_o35), zdi6ume(this, c9_o35);
  }, 'ignorableWhitespace': function () {}, 'characters': function (h_j46) {
    if (h_j46 = zj4hn6_['apply'](this, arguments)) {
      if (this['cdata']) var b0zgaq = this['doc']['createCDATASection'](h_j46);else var b0zgaq = this['doc']['createTextNode'](h_j46);this['currentElement'] ? this['currentElement']['appendChild'](b0zgaq) : /^\s*$/['test'](h_j46) && this['doc']['appendChild'](b0zgaq), this['locator'] && za8x1r(this['locator'], b0zgaq);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (j_h6n) {
    (this['locator'] = j_h6n) && (j_h6n['lineNumber'] = 0x0);
  }, 'comment': function (kfqzg) {
    kfqzg = zj4hn6_['apply'](this, arguments);var m6dh = this['doc']['createComment'](kfqzg);this['locator'] && za8x1r(this['locator'], m6dh), zdi6ume(this, m6dh);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (b8ar, g0qzak, qbzga) {
    var eidutm = this['doc']['implementation'];if (eidutm && eidutm['createDocumentType']) {
      var zxb81 = eidutm['createDocumentType'](b8ar, g0qzak, qbzga);this['locator'] && za8x1r(this['locator'], zxb81), zdi6ume(this, zxb81);
    }
  }, 'warning': function (kgq0a) {
    console['warn']('[xmldom warning]\t' + kgq0a, zufgikt(this['locator']));
  }, 'error': function ($pw1r8) {
    console['error']('[xmldom error]\t' + $pw1r8, zufgikt(this['locator']));
  }, 'fatalError': function (mn46jh) {
    throw console['error']('[xmldom fatalError]\t' + mn46jh, zufgikt(this['locator'])), mn46jh;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (n439) {
  zx1w8b['prototype'][n439] = function () {
    return null;
  };
});var ztium = require('./dddsax')['XMLReader'],
    zpw1r$ = exports['DOMImplementation'] = require('./ddddom')['DOMImplementation'];exports['XMLSerializer'] = require('./ddddom')['XMLSerializer'], exports['DOMParser'] = zzb80xa;