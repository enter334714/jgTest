var G = wx.$E;
function Edi_t1j(plnxo) {
  this['options'] = plnxo || { 'locator': {} };
}function Eij15d(j$65, urvaqw, agh9u) {
  function aghp9u(it1ds) {
    var d1tij_ = j$65[it1ds];!d1tij_ && h9gqa && (d1tij_ = 0x2 == j$65['length'] ? function (ji_td) {
      j$65(it1ds, ji_td);
    } : j$65), hpln[it1ds] = d1tij_ && function (huqa9r) {
      d1tij_('[xmldom ' + it1ds + ']\t' + huqa9r + Eb4mc7(agh9u));
    } || function () {};
  }if (!j$65) {
    if (urvaqw instanceof Ewrq) return urvaqw;j$65 = urvaqw;
  }var hpln = {},
      h9gqa = j$65 instanceof Function;return agh9u = agh9u || {}, aghp9u('warning'), aghp9u('error'), aghp9u('fatalError'), hpln;
}function Ewrq() {
  this['cdata'] = !0x1;
}function Ef8qwr(it1d_, fqrw8v) {
  fqrw8v['lineNumber'] = it1d_['lineNumber'], fqrw8v['columnNumber'] = it1d_['columnNumber'];
}function Eb4mc7(mb7c4$) {
  return mb7c4$ ? '\x0a@' + (mb7c4$['systemId'] || '') + '#[line:' + mb7c4$['lineNumber'] + ',col:' + mb7c4$['columnNumber'] + ']' : void 0x0;
}function Euvrwaq(rqa8w, wrf, plnoy) {
  return 'string' == typeof rqa8w ? rqa8w['substr'](wrf, plnoy) : rqa8w['length'] >= wrf + plnoy || wrf ? new java['lang']['String'](rqa8w, wrf, plnoy) + '' : rqa8w;
}function Efv8m7(awrquv, nhgy) {
  awrquv['currentElement'] ? awrquv['currentElement']['appendChild'](nhgy) : awrquv['doc']['appendChild'](nhgy);
}Edi_t1j['prototype']['parseFromString'] = function (av9qr, xgnlyp) {
  var hngp9y = this['options'],
      gnhl = new Es23z0t(),
      i51j6 = hngp9y['domBuilder'] || new Ewrq(),
      uvaw = hngp9y['errorHandler'],
      xgy = hngp9y['locator'],
      b8mw7 = hngp9y['xmlns'] || {},
      arw8qv = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return xgy && i51j6['setDocumentLocator'](xgy), gnhl['errorHandler'] = Eij15d(uvaw, i51j6, xgy), gnhl['domBuilder'] = hngp9y['domBuilder'] || i51j6, /\/x?html?$/['test'](xgnlyp) && (arw8qv['nbsp'] = '\u00a0', arw8qv['copy'] = '©', b8mw7[''] = 'http://www.w3.org/1999/xhtml'), b8mw7['xml'] = b8mw7['xml'] || 'http://www.w3.org/XML/1998/namespace', av9qr ? gnhl['parse'](av9qr, b8mw7, arw8qv) : gnhl['errorHandler']['error']('invalid doc source'), i51j6['doc'];
}, Ewrq['prototype'] = { 'startDocument': function () {
    this['doc'] = new Epgnylx()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (rw8fv, t21i_, g9apu, c46bk) {
    var $bmkc = this['doc'],
        b478f = $bmkc['createElementNS'](rw8fv, g9apu || t21i_),
        d516j = c46bk['length'];Efv8m7(this, b478f), this['currentElement'] = b478f, this['locator'] && Ef8qwr(this['locator'], b478f);for (var fwm8 = 0x0; d516j > fwm8; fwm8++) {
      var rw8fv = c46bk['getURI'](fwm8),
          j_idt1 = c46bk['getValue'](fwm8),
          g9apu = c46bk['getQName'](fwm8),
          fwv8r7 = $bmkc['createAttributeNS'](rw8fv, g9apu);this['locator'] && Ef8qwr(c46bk['getLocator'](fwm8), fwv8r7), fwv8r7['value'] = fwv8r7['nodeValue'] = j_idt1, b478f['setAttributeNode'](fwv8r7);
    }
  }, 'endElement': function () {
    {
      var ijd_ = this['currentElement'];ijd_['tagName'];
    }this['currentElement'] = ijd_['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (t21i, bf78m) {
    var oxnpl = this['doc']['createProcessingInstruction'](t21i, bf78m);this['locator'] && Ef8qwr(this['locator'], oxnpl), Efv8m7(this, oxnpl);
  }, 'ignorableWhitespace': function () {}, 'characters': function ($4cbk) {
    if ($4cbk = Euvrwaq['apply'](this, arguments)) {
      if (this['cdata']) var fm7vw = this['doc']['createCDATASection']($4cbk);else var fm7vw = this['doc']['createTextNode']($4cbk);this['currentElement'] ? this['currentElement']['appendChild'](fm7vw) : /^\s*$/['test']($4cbk) && this['doc']['appendChild'](fm7vw), this['locator'] && Ef8qwr(this['locator'], fm7vw);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (s230_) {
    (this['locator'] = s230_) && (s230_['lineNumber'] = 0x0);
  }, 'comment': function (hyglp) {
    hyglp = Euvrwaq['apply'](this, arguments);var rvq8aw = this['doc']['createComment'](hyglp);this['locator'] && Ef8qwr(this['locator'], rvq8aw), Efv8m7(this, rvq8aw);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (cb4m$7, $bckm, rqvfw) {
    var pa9hgu = this['doc']['implementation'];if (pa9hgu && pa9hgu['createDocumentType']) {
      var c7b4fm = pa9hgu['createDocumentType'](cb4m$7, $bckm, rqvfw);this['locator'] && Ef8qwr(this['locator'], c7b4fm), Efv8m7(this, c7b4fm);
    }
  }, 'warning': function (w7bfm) {
    console['warn']('[xmldom warning]\t' + w7bfm, Eb4mc7(this['locator']));
  }, 'error': function (ua9rqh) {
    console['error']('[xmldom error]\t' + ua9rqh, Eb4mc7(this['locator']));
  }, 'fatalError': function (t_132) {
    throw console['error']('[xmldom fatalError]\t' + t_132, Eb4mc7(this['locator'])), t_132;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (wv87m) {
  Ewrq['prototype'][wv87m] = function () {
    return null;
  };
});var Es23z0t = require('./DD88DD88cDD88DD88')['XMLReader'],
    Epgnylx = exports['DOMImplementation'] = require('./DD88DD88DODD88DD88')['DOMImplementation'];exports['XMLSerializer'] = require('./DD88DD88DODD88DD88')['XMLSerializer'], exports['DOMParser'] = Edi_t1j;