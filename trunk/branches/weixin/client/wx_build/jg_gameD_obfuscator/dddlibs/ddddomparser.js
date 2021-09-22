var v = wx.$d;
function zv1fl(qk6bn) {
  this['options'] = qk6bn || { 'locator': {} };
}function zm67n(nkbz76, a2nqm, o5uijd) {
  function diuz(m7qnb) {
    var kdjz7 = nkbz76[m7qnb];!kdjz7 && bn6z && (kdjz7 = 0x2 == nkbz76['length'] ? function (x6bmq) {
      nkbz76(m7qnb, x6bmq);
    } : nkbz76), x_02[m7qnb] = kdjz7 ? function (_xam2) {
      kdjz7('[xmldom ' + m7qnb + ']\t' + _xam2 + zcvp1lf(o5uijd));
    } : function () {};
  }if (!nkbz76) {
    if (a2nqm instanceof zpflv1) return a2nqm;nkbz76 = a2nqm;
  }var x_02 = {},
      bn6z = nkbz76 instanceof Function;return o5uijd = o5uijd || {}, diuz('warning'), diuz('error'), diuz('fatalError'), x_02;
}function zpflv1() {
  this['cdata'] = !0x1;
}function zmaq(dzji7, nxma2) {
  nxma2['lineNumber'] = dzji7['lineNumber'], nxma2['columnNumber'] = dzji7['columnNumber'];
}function zcvp1lf(zuijo) {
  return zuijo ? '\x0a@' + (zuijo['systemId'] || '') + '#[line:' + zuijo['lineNumber'] + ',col:' + zuijo['columnNumber'] + ']' : void 0x0;
}function zpylf1c(bnq7k, k7bzid, mx6q) {
  return 'string' == typeof bnq7k ? bnq7k['substr'](k7bzid, mx6q) : bnq7k['length'] >= k7bzid + mx6q || k7bzid ? new java['lang']['String'](bnq7k, k7bzid, mx6q) + '' : bnq7k;
}function zv1fwt(kdzji7, pl1vcf) {
  (kdzji7['currentElement'] || kdzji7['doc'])['appendChild'](pl1vcf);
}zv1fl['prototype']['parseFromString'] = function (ypl3, ou5i) {
  var _xga = this['options'],
      _max02 = new zmq2nx(),
      n2qxam = _xga['domBuilder'] || new zpflv1(),
      fvt41 = _xga['errorHandler'],
      ylf = _xga['locator'],
      dij7k = _xga['xmlns'] || {},
      axnmq2 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ylf && n2qxam['setDocumentLocator'](ylf), _max02['errorHandler'] = zm67n(fvt41, n2qxam, ylf), _max02['domBuilder'] = _xga['domBuilder'] || n2qxam, /\/x?html?$/['test'](ou5i) && (axnmq2['nbsp'] = '\u00a0', axnmq2['copy'] = '©', dij7k[''] = 'http://www.w3.org/1999/xhtml'), dij7k['xml'] = dij7k['xml'] || 'http://www.w3.org/XML/1998/namespace', ypl3 ? _max02['parse'](ypl3, dij7k, axnmq2) : _max02['errorHandler']['error']('invalid doc source'), n2qxam['doc'];
}, zpflv1['prototype'] = { 'startDocument': function () {
    this['doc'] = new zpfl1yc()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ojd5, d7zibk, vt4w$1, qna2m) {
    var ojud5i = this['doc'],
        lpf1 = ojud5i['createElementNS'](ojd5, vt4w$1 || d7zibk),
        cy93p = qna2m['length'];zv1fwt(this, lpf1), this['currentElement'] = lpf1, this['locator'] && zmaq(this['locator'], lpf1);for (var qx0m2 = 0x0; qx0m2 < cy93p; qx0m2++) {
      var ojd5 = qna2m['getURI'](qx0m2),
          bzk67n = qna2m['getValue'](qx0m2),
          vt4w$1 = qna2m['getQName'](qx0m2),
          kuzij = ojud5i['createAttributeNS'](ojd5, vt4w$1);this['locator'] && zmaq(qna2m['getLocator'](qx0m2), kuzij), kuzij['value'] = kuzij['nodeValue'] = bzk67n, lpf1['setAttributeNode'](kuzij);
    }
  }, 'endElement': function () {
    var x2ma = this['currentElement'];x2ma['tagName'], this['currentElement'] = x2ma['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (n2xq, q2xa) {
    q2xa = this['doc']['createProcessingInstruction'](n2xq, q2xa), (this['locator'] && zmaq(this['locator'], q2xa), zv1fwt(this, q2xa));
  }, 'ignorableWhitespace': function () {}, 'characters': function (k7idbz) {
    var zdjik7;(k7idbz = zpylf1c['apply'](this, arguments)) && (zdjik7 = this['cdata'] ? this['doc']['createCDATASection'](k7idbz) : this['doc']['createTextNode'](k7idbz), this['currentElement'] ? this['currentElement']['appendChild'](zdjik7) : /^\s*$/['test'](k7idbz) && this['doc']['appendChild'](zdjik7), this['locator'] && zmaq(this['locator'], zdjik7));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (iu8jo5) {
    (this['locator'] = iu8jo5) && (iu8jo5['lineNumber'] = 0x0);
  }, 'comment': function (qb6mn7) {
    qb6mn7 = zpylf1c['apply'](this, arguments);var u95h = this['doc']['createComment'](qb6mn7);this['locator'] && zmaq(this['locator'], u95h), zv1fwt(this, u95h);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (o8u5j, lf3cyp, $e4wvt) {
    var knz6 = this['doc']['implementation'];knz6 && knz6['createDocumentType'] && ($e4wvt = knz6['createDocumentType'](o8u5j, lf3cyp, $e4wvt), this['locator'] && zmaq(this['locator'], $e4wvt), zv1fwt(this, $e4wvt));
  }, 'warning': function (mq6b) {
    console['warn']('[xmldom warning]\t' + mq6b, zcvp1lf(this['locator']));
  }, 'error': function (_amx0) {
    console['error']('[xmldom error]\t' + _amx0, zcvp1lf(this['locator']));
  }, 'fatalError': function (i5uj) {
    throw console['error']('[xmldom fatalError]\t' + i5uj, zcvp1lf(this['locator'])), i5uj;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ho5u89) {
  zpflv1['prototype'][ho5u89] = function () {
    return null;
  };
});var zmq2nx = require('./dddsax')['XMLReader'],
    zpfl1yc = exports['DOMImplementation'] = require('./ddddom')['DOMImplementation'];exports['XMLSerializer'] = require('./ddddom')['XMLSerializer'], exports['DOMParser'] = zv1fl;