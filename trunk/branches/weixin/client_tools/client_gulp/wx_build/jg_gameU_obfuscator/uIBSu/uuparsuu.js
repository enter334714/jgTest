var o = wx.$U;
function uzwdg95(_ksa) {
  this['options'] = _ksa || { 'locator': {} };
}function umih3j4(lihqo, _nka6v, m4hp3j) {
  function im3o(qw7ol) {
    var k6a_v = lihqo[qw7ol];!k6a_v && nevsu && (k6a_v = 0x2 == lihqo['length'] ? function (n_a6v) {
      lihqo(qw7ol, n_a6v);
    } : lihqo), hmi3j4[qw7ol] = k6a_v && function (qli7xo) {
      k6a_v('[xmldom ' + qw7ol + ']\t' + qli7xo + ufusp$e(m4hp3j));
    } || function () {};
  }if (!lihqo) {
    if (_nka6v instanceof un6kva) return _nka6v;lihqo = _nka6v;
  }var hmi3j4 = {},
      nevsu = lihqo instanceof Function;return m4hp3j = m4hp3j || {}, im3o('warning'), im3o('error'), im3o('fatalError'), hmi3j4;
}function un6kva() {
  this['cdata'] = !0x1;
}function uoi7qlx(r108bc, mhqli) {
  mhqli['lineNumber'] = r108bc['lineNumber'], mhqli['columnNumber'] = r108bc['columnNumber'];
}function ufusp$e(qwgxl7) {
  return qwgxl7 ? '\x0a@' + (qwgxl7['systemId'] || '') + '#[line:' + qwgxl7['lineNumber'] + ',col:' + qwgxl7['columnNumber'] + ']' : void 0x0;
}function uksva(b1r8y0, pue$fs, n$suef) {
  return 'string' == typeof b1r8y0 ? b1r8y0['substr'](pue$fs, n$suef) : b1r8y0['length'] >= pue$fs + n$suef || pue$fs ? new java['lang']['String'](b1r8y0, pue$fs, n$suef) + '' : b1r8y0;
}function uwgl7xq(p43feu, t59zg) {
  p43feu['currentElement'] ? p43feu['currentElement']['appendChild'](t59zg) : p43feu['doc']['appendChild'](t59zg);
}uzwdg95['prototype']['parseFromString'] = function (pf3hj, hm34p) {
  var mihoql = this['options'],
      dg9wz7 = new uus$ve(),
      g5zdt = mihoql['domBuilder'] || new un6kva(),
      v$une = mihoql['errorHandler'],
      nv_6ka = mihoql['locator'],
      ck6ar = mihoql['xmlns'] || {},
      _vskn = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return nv_6ka && g5zdt['setDocumentLocator'](nv_6ka), dg9wz7['errorHandler'] = umih3j4(v$une, g5zdt, nv_6ka), dg9wz7['domBuilder'] = mihoql['domBuilder'] || g5zdt, /\/x?html?$/['test'](hm34p) && (_vskn['nbsp'] = '\u00a0', _vskn['copy'] = '©', ck6ar[''] = 'http://www.w3.org/1999/xhtml'), ck6ar['xml'] = ck6ar['xml'] || 'http://www.w3.org/XML/1998/namespace', pf3hj ? dg9wz7['parse'](pf3hj, ck6ar, _vskn) : dg9wz7['errorHandler']['error']('invalid doc source'), g5zdt['doc'];
}, un6kva['prototype'] = { 'startDocument': function () {
    this['doc'] = new ud9zg7()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (n6_av, $ef4, d5gtz9, qm) {
    var l7xwg = this['doc'],
        zgx79 = l7xwg['createElementNS'](n6_av, d5gtz9 || $ef4),
        zd295t = qm['length'];uwgl7xq(this, zgx79), this['currentElement'] = zgx79, this['locator'] && uoi7qlx(this['locator'], zgx79);for (var sv$_e = 0x0; zd295t > sv$_e; sv$_e++) {
      var n6_av = qm['getURI'](sv$_e),
          lqhm = qm['getValue'](sv$_e),
          d5gtz9 = qm['getQName'](sv$_e),
          uesn$v = l7xwg['createAttributeNS'](n6_av, d5gtz9);this['locator'] && uoi7qlx(qm['getLocator'](sv$_e), uesn$v), uesn$v['value'] = uesn$v['nodeValue'] = lqhm, zgx79['setAttributeNode'](uesn$v);
    }
  }, 'endElement': function () {
    {
      var zd5w9g = this['currentElement'];zd5w9g['tagName'];
    }this['currentElement'] = zd5w9g['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (p3efu, f3j4h) {
    var v$_esn = this['doc']['createProcessingInstruction'](p3efu, f3j4h);this['locator'] && uoi7qlx(this['locator'], v$_esn), uwgl7xq(this, v$_esn);
  }, 'ignorableWhitespace': function () {}, 'characters': function (low7q) {
    if (low7q = uksva['apply'](this, arguments)) {
      if (this['cdata']) var l97gx = this['doc']['createCDATASection'](low7q);else var l97gx = this['doc']['createTextNode'](low7q);this['currentElement'] ? this['currentElement']['appendChild'](l97gx) : /^\s*$/['test'](low7q) && this['doc']['appendChild'](l97gx), this['locator'] && uoi7qlx(this['locator'], l97gx);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (lmqxo) {
    (this['locator'] = lmqxo) && (lmqxo['lineNumber'] = 0x0);
  }, 'comment': function (nuef) {
    nuef = uksva['apply'](this, arguments);var nvk_a6 = this['doc']['createComment'](nuef);this['locator'] && uoi7qlx(this['locator'], nvk_a6), uwgl7xq(this, nvk_a6);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (jp, xioml, epu$f4) {
    var eu$s = this['doc']['implementation'];if (eu$s && eu$s['createDocumentType']) {
      var c1r06 = eu$s['createDocumentType'](jp, xioml, epu$f4);this['locator'] && uoi7qlx(this['locator'], c1r06), uwgl7xq(this, c1r06);
    }
  }, 'warning': function ($p4e) {
    console['warn']('[xmldom warning]\t' + $p4e, ufusp$e(this['locator']));
  }, 'error': function (rac806) {
    console['error']('[xmldom error]\t' + rac806, ufusp$e(this['locator']));
  }, 'fatalError': function (vk_ac6) {
    throw console['error']('[xmldom fatalError]\t' + vk_ac6, ufusp$e(this['locator'])), vk_ac6;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (sne$v) {
  un6kva['prototype'][sne$v] = function () {
    return null;
  };
});var uus$ve = require('./uu12uu')['XMLReader'],
    ud9zg7 = exports['DOMImplementation'] = require('./uuDOuu')['DOMImplementation'];exports['XMLSerializer'] = require('./uuDOuu')['XMLSerializer'], exports['DOMParser'] = uzwdg95;