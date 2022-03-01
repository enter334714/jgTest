var F = wx.$D;
function Doma5g(zri12) {
  this['options'] = zri12 || { 'locator': {} };
}function Dsteqw(qkj, ubpf9, ao5mgj) {
  function pc0ub(qvx) {
    var gol5_m = qkj[qvx];!gol5_m && _log5m && (gol5_m = 0x2 == qkj['length'] ? function (f7b9pu) {
      qkj(qvx, f7b9pu);
    } : qkj), ja6x5g[qvx] = gol5_m && function (mgx5j) {
      gol5_m('[xmldom ' + qvx + ']\t' + mgx5j + Dwvtesq(ao5mgj));
    } || function () {};
  }if (!qkj) {
    if (ubpf9 instanceof Dsveqw) return ubpf9;qkj = ubpf9;
  }var ja6x5g = {},
      _log5m = qkj instanceof Function;return ao5mgj = ao5mgj || {}, pc0ub('warning'), pc0ub('error'), pc0ub('fatalError'), ja6x5g;
}function Dsveqw() {
  this['cdata'] = !0x1;
}function Desc0tv(uce3s0, vq6tw) {
  vq6tw['lineNumber'] = uce3s0['lineNumber'], vq6tw['columnNumber'] = uce3s0['columnNumber'];
}function Dwvtesq(e0tc3s) {
  return e0tc3s ? '\x0a@' + (e0tc3s['systemId'] || '') + '#[line:' + e0tc3s['lineNumber'] + ',col:' + e0tc3s['columnNumber'] + ']' : void 0x0;
}function Dtesc30(bu97fp, pb97, xjk6wa) {
  return 'string' == typeof bu97fp ? bu97fp['substr'](pb97, xjk6wa) : bu97fp['length'] >= pb97 + xjk6wa || pb97 ? new java['lang']['String'](bu97fp, pb97, xjk6wa) + '' : bu97fp;
}function Dhzi12r(izhr2, tcsv0) {
  izhr2['currentElement'] ? izhr2['currentElement']['appendChild'](tcsv0) : izhr2['doc']['appendChild'](tcsv0);
}Doma5g['prototype']['parseFromString'] = function (ri_h, amj5gx) {
  var $n812 = this['options'],
      uc39pb = new Dn1h$2(),
      qvst = $n812['domBuilder'] || new Dsveqw(),
      lz2_ = $n812['errorHandler'],
      v0teqs = $n812['locator'],
      c3s0eu = $n812['xmlns'] || {},
      bc3u0 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return v0teqs && qvst['setDocumentLocator'](v0teqs), uc39pb['errorHandler'] = Dsteqw(lz2_, qvst, v0teqs), uc39pb['domBuilder'] = $n812['domBuilder'] || qvst, /\/x?html?$/['test'](amj5gx) && (bc3u0['nbsp'] = '\u00a0', bc3u0['copy'] = '©', c3s0eu[''] = 'http://www.w3.org/1999/xhtml'), c3s0eu['xml'] = c3s0eu['xml'] || 'http://www.w3.org/XML/1998/namespace', ri_h ? uc39pb['parse'](ri_h, c3s0eu, bc3u0) : uc39pb['errorHandler']['error']('invalid doc source'), qvst['doc'];
}, Dsveqw['prototype'] = { 'startDocument': function () {
    this['doc'] = new Dcu93pb()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (u3pc0b, tvksw, xk6wj, r1zh) {
    var l_oizr = this['doc'],
        bf9u3 = l_oizr['createElementNS'](u3pc0b, xk6wj || tvksw),
        kwjxq6 = r1zh['length'];Dhzi12r(this, bf9u3), this['currentElement'] = bf9u3, this['locator'] && Desc0tv(this['locator'], bf9u3);for (var wakjx6 = 0x0; kwjxq6 > wakjx6; wakjx6++) {
      var u3pc0b = r1zh['getURI'](wakjx6),
          rh182n = r1zh['getValue'](wakjx6),
          xk6wj = r1zh['getQName'](wakjx6),
          p9b3uc = l_oizr['createAttributeNS'](u3pc0b, xk6wj);this['locator'] && Desc0tv(r1zh['getLocator'](wakjx6), p9b3uc), p9b3uc['value'] = p9b3uc['nodeValue'] = rh182n, bf9u3['setAttributeNode'](p9b3uc);
    }
  }, 'endElement': function () {
    {
      var x6jka = this['currentElement'];x6jka['tagName'];
    }this['currentElement'] = x6jka['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (sqvwt, hrz1i) {
    var tes30c = this['doc']['createProcessingInstruction'](sqvwt, hrz1i);this['locator'] && Desc0tv(this['locator'], tes30c), Dhzi12r(this, tes30c);
  }, 'ignorableWhitespace': function () {}, 'characters': function (l_oz) {
    if (l_oz = Dtesc30['apply'](this, arguments)) {
      if (this['cdata']) var uep3 = this['doc']['createCDATASection'](l_oz);else var uep3 = this['doc']['createTextNode'](l_oz);this['currentElement'] ? this['currentElement']['appendChild'](uep3) : /^\s*$/['test'](l_oz) && this['doc']['appendChild'](uep3), this['locator'] && Desc0tv(this['locator'], uep3);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ets30) {
    (this['locator'] = ets30) && (ets30['lineNumber'] = 0x0);
  }, 'comment': function (l_imzo) {
    l_imzo = Dtesc30['apply'](this, arguments);var xa5m = this['doc']['createComment'](l_imzo);this['locator'] && Desc0tv(this['locator'], xa5m), Dhzi12r(this, xa5m);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (_5lmo, q6twk, e03cpu) {
    var wetsq = this['doc']['implementation'];if (wetsq && wetsq['createDocumentType']) {
      var xa56j = wetsq['createDocumentType'](_5lmo, q6twk, e03cpu);this['locator'] && Desc0tv(this['locator'], xa56j), Dhzi12r(this, xa56j);
    }
  }, 'warning': function (oz_) {
    console['warn']('[xmldom warning]\t' + oz_, Dwvtesq(this['locator']));
  }, 'error': function (qwk6vx) {
    console['error']('[xmldom error]\t' + qwk6vx, Dwvtesq(this['locator']));
  }, 'fatalError': function (_ri2l) {
    throw console['error']('[xmldom fatalError]\t' + _ri2l, Dwvtesq(this['locator'])), _ri2l;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (up3e) {
  Dsveqw['prototype'][up3e] = function () {
    return null;
  };
});var Dn1h$2 = require('./d22d22cd22d22')['XMLReader'],
    Dcu93pb = exports['DOMImplementation'] = require('./d22d22DOd22d22')['DOMImplementation'];exports['XMLSerializer'] = require('./d22d22DOd22d22')['XMLSerializer'], exports['DOMParser'] = Doma5g;