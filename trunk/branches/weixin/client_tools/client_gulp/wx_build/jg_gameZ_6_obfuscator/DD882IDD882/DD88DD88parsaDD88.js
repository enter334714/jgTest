var G = wx.$E;
function Ehpnyg9(d5j6$) {
  this['options'] = d5j6$ || { 'locator': {} };
}function Egupa9h(c4m$, rvwau, tdji1) {
  function k$4c6b(hpln) {
    var pxyln = c4m$[hpln];!pxyln && $56ck && (pxyln = 0x2 == c4m$['length'] ? function (_032st) {
      c4m$(hpln, _032st);
    } : c4m$), xyopnl[hpln] = pxyln && function (bc7f) {
      pxyln('[xmldom ' + hpln + ']\t' + bc7f + Eqg9au(tdji1));
    } || function () {};
  }if (!c4m$) {
    if (rvwau instanceof Eyp9hgu) return rvwau;c4m$ = rvwau;
  }var xyopnl = {},
      $56ck = c4m$ instanceof Function;return tdji1 = tdji1 || {}, k$4c6b('warning'), k$4c6b('error'), k$4c6b('fatalError'), xyopnl;
}function Eyp9hgu() {
  this['cdata'] = !0x1;
}function Ekb$c64(t1i_s2, $ck456) {
  $ck456['lineNumber'] = t1i_s2['lineNumber'], $ck456['columnNumber'] = t1i_s2['columnNumber'];
}function Eqg9au(avwruq) {
  return avwruq ? '\x0a@' + (avwruq['systemId'] || '') + '#[line:' + avwruq['lineNumber'] + ',col:' + avwruq['columnNumber'] + ']' : void 0x0;
}function Ehlp(_321t, cbf74m, uyhp9) {
  return 'string' == typeof _321t ? _321t['substr'](cbf74m, uyhp9) : _321t['length'] >= cbf74m + uyhp9 || cbf74m ? new java['lang']['String'](_321t, cbf74m, uyhp9) + '' : _321t;
}function Emf7w8(ploxn, hpgn) {
  ploxn['currentElement'] ? ploxn['currentElement']['appendChild'](hpgn) : ploxn['doc']['appendChild'](hpgn);
}Ehpnyg9['prototype']['parseFromString'] = function (nlpo, r8f7wv) {
  var _31s2 = this['options'],
      aphu = new Et_s31(),
      _s1tid = _31s2['domBuilder'] || new Eyp9hgu(),
      a9gpu = _31s2['errorHandler'],
      nlgh = _31s2['locator'],
      j1i65d = _31s2['xmlns'] || {},
      $64kbc = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return nlgh && _s1tid['setDocumentLocator'](nlgh), aphu['errorHandler'] = Egupa9h(a9gpu, _s1tid, nlgh), aphu['domBuilder'] = _31s2['domBuilder'] || _s1tid, /\/x?html?$/['test'](r8f7wv) && ($64kbc['nbsp'] = '\u00a0', $64kbc['copy'] = '©', j1i65d[''] = 'http://www.w3.org/1999/xhtml'), j1i65d['xml'] = j1i65d['xml'] || 'http://www.w3.org/XML/1998/namespace', nlpo ? aphu['parse'](nlpo, j1i65d, $64kbc) : aphu['errorHandler']['error']('invalid doc source'), _s1tid['doc'];
}, Eyp9hgu['prototype'] = { 'startDocument': function () {
    this['doc'] = new Equar()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ruqva, sti_21, kjd56$, qwra8v) {
    var $cm4b = this['doc'],
        mb74$c = $cm4b['createElementNS'](ruqva, kjd56$ || sti_21),
        ypgxn = qwra8v['length'];Emf7w8(this, mb74$c), this['currentElement'] = mb74$c, this['locator'] && Ekb$c64(this['locator'], mb74$c);for (var f87b4m = 0x0; ypgxn > f87b4m; f87b4m++) {
      var ruqva = qwra8v['getURI'](f87b4m),
          harq9 = qwra8v['getValue'](f87b4m),
          kjd56$ = qwra8v['getQName'](f87b4m),
          b7$4 = $cm4b['createAttributeNS'](ruqva, kjd56$);this['locator'] && Ekb$c64(qwra8v['getLocator'](f87b4m), b7$4), b7$4['value'] = b7$4['nodeValue'] = harq9, mb74$c['setAttributeNode'](b7$4);
    }
  }, 'endElement': function () {
    {
      var k645c$ = this['currentElement'];k645c$['tagName'];
    }this['currentElement'] = k645c$['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (arvq9, pnhg9) {
    var j5_ = this['doc']['createProcessingInstruction'](arvq9, pnhg9);this['locator'] && Ekb$c64(this['locator'], j5_), Emf7w8(this, j5_);
  }, 'ignorableWhitespace': function () {}, 'characters': function (bmfc7) {
    if (bmfc7 = Ehlp['apply'](this, arguments)) {
      if (this['cdata']) var fb48m7 = this['doc']['createCDATASection'](bmfc7);else var fb48m7 = this['doc']['createTextNode'](bmfc7);this['currentElement'] ? this['currentElement']['appendChild'](fb48m7) : /^\s*$/['test'](bmfc7) && this['doc']['appendChild'](fb48m7), this['locator'] && Ekb$c64(this['locator'], fb48m7);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (arqvw) {
    (this['locator'] = arqvw) && (arqvw['lineNumber'] = 0x0);
  }, 'comment': function (i1_sd) {
    i1_sd = Ehlp['apply'](this, arguments);var zs32 = this['doc']['createComment'](i1_sd);this['locator'] && Ekb$c64(this['locator'], zs32), Emf7w8(this, zs32);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ckj65, wrqv8a, $5cj6k) {
    var rwv8 = this['doc']['implementation'];if (rwv8 && rwv8['createDocumentType']) {
      var hug9a = rwv8['createDocumentType'](ckj65, wrqv8a, $5cj6k);this['locator'] && Ekb$c64(this['locator'], hug9a), Emf7w8(this, hug9a);
    }
  }, 'warning': function (ygp9u) {
    console['warn']('[xmldom warning]\t' + ygp9u, Eqg9au(this['locator']));
  }, 'error': function (ahqr) {
    console['error']('[xmldom error]\t' + ahqr, Eqg9au(this['locator']));
  }, 'fatalError': function (t_132) {
    throw console['error']('[xmldom fatalError]\t' + t_132, Eqg9au(this['locator'])), t_132;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (vw7f8) {
  Eyp9hgu['prototype'][vw7f8] = function () {
    return null;
  };
});var Et_s31 = require('./DD88DD88cDD88DD88')['XMLReader'],
    Equar = exports['DOMImplementation'] = require('./DD88DD88DODD88DD88')['DOMImplementation'];exports['XMLSerializer'] = require('./DD88DD88DODD88DD88')['XMLSerializer'], exports['DOMParser'] = Ehpnyg9;