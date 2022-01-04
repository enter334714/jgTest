var o = wx.$U;
function ulq7x(z79xw) {
  this['options'] = z79xw || { 'locator': {} };
}function uqiolh(j4f3hp, ksv_, z7d9wg) {
  function kvs_n(akv_n) {
    var tg5dz9 = j4f3hp[akv_n];!tg5dz9 && mhj3o && (tg5dz9 = 0x2 == j4f3hp['length'] ? function (brc081) {
      j4f3hp(akv_n, brc081);
    } : j4f3hp), qjohim[akv_n] = tg5dz9 && function (fe4u3p) {
      tg5dz9('[xmldom ' + akv_n + ']\t' + fe4u3p + uioqmx(z7d9wg));
    } || function () {};
  }if (!j4f3hp) {
    if (ksv_ instanceof uav6n_) return ksv_;j4f3hp = ksv_;
  }var qjohim = {},
      mhj3o = j4f3hp instanceof Function;return z7d9wg = z7d9wg || {}, kvs_n('warning'), kvs_n('error'), kvs_n('fatalError'), qjohim;
}function uav6n_() {
  this['cdata'] = !0x1;
}function up4u3(g59zw, qloi7) {
  qloi7['lineNumber'] = g59zw['lineNumber'], qloi7['columnNumber'] = g59zw['columnNumber'];
}function uioqmx(_es) {
  return _es ? '\x0a@' + (_es['systemId'] || '') + '#[line:' + _es['lineNumber'] + ',col:' + _es['columnNumber'] + ']' : void 0x0;
}function uef3pu4(lx7ow, c8b0r, io3m) {
  return 'string' == typeof lx7ow ? lx7ow['substr'](c8b0r, io3m) : lx7ow['length'] >= c8b0r + io3m || c8b0r ? new java['lang']['String'](lx7ow, c8b0r, io3m) + '' : lx7ow;
}function usna(n_k$sv, vknsa_) {
  n_k$sv['currentElement'] ? n_k$sv['currentElement']['appendChild'](vknsa_) : n_k$sv['doc']['appendChild'](vknsa_);
}ulq7x['prototype']['parseFromString'] = function (uensv, s$_nkv) {
  var a6vck_ = this['options'],
      $fseu = new uhmlq(),
      uj3pf4 = a6vck_['domBuilder'] || new uav6n_(),
      xoilm = a6vck_['errorHandler'],
      $fu4e = a6vck_['locator'],
      acr80 = a6vck_['xmlns'] || {},
      dzg97w = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return $fu4e && uj3pf4['setDocumentLocator']($fu4e), $fseu['errorHandler'] = uqiolh(xoilm, uj3pf4, $fu4e), $fseu['domBuilder'] = a6vck_['domBuilder'] || uj3pf4, /\/x?html?$/['test'](s$_nkv) && (dzg97w['nbsp'] = '\u00a0', dzg97w['copy'] = '©', acr80[''] = 'http://www.w3.org/1999/xhtml'), acr80['xml'] = acr80['xml'] || 'http://www.w3.org/XML/1998/namespace', uensv ? $fseu['parse'](uensv, acr80, dzg97w) : $fseu['errorHandler']['error']('invalid doc source'), uj3pf4['doc'];
}, uav6n_['prototype'] = { 'startDocument': function () {
    this['doc'] = new uh4fj3()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (qil7xo, qhij, _vaksn, owq7) {
    var u$nsve = this['doc'],
        $fes = u$nsve['createElementNS'](qil7xo, _vaksn || qhij),
        $snfue = owq7['length'];usna(this, $fes), this['currentElement'] = $fes, this['locator'] && up4u3(this['locator'], $fes);for (var rc_a6 = 0x0; $snfue > rc_a6; rc_a6++) {
      var qil7xo = owq7['getURI'](rc_a6),
          gt59dz = owq7['getValue'](rc_a6),
          _vaksn = owq7['getQName'](rc_a6),
          gwd97 = u$nsve['createAttributeNS'](qil7xo, _vaksn);this['locator'] && up4u3(owq7['getLocator'](rc_a6), gwd97), gwd97['value'] = gwd97['nodeValue'] = gt59dz, $fes['setAttributeNode'](gwd97);
    }
  }, 'endElement': function () {
    {
      var qi7lx = this['currentElement'];qi7lx['tagName'];
    }this['currentElement'] = qi7lx['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (xlow, hj4pm3) {
    var x7qwg = this['doc']['createProcessingInstruction'](xlow, hj4pm3);this['locator'] && up4u3(this['locator'], x7qwg), usna(this, x7qwg);
  }, 'ignorableWhitespace': function () {}, 'characters': function (k_6ar) {
    if (k_6ar = uef3pu4['apply'](this, arguments)) {
      if (this['cdata']) var j4h = this['doc']['createCDATASection'](k_6ar);else var j4h = this['doc']['createTextNode'](k_6ar);this['currentElement'] ? this['currentElement']['appendChild'](j4h) : /^\s*$/['test'](k_6ar) && this['doc']['appendChild'](j4h), this['locator'] && up4u3(this['locator'], j4h);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (skva_) {
    (this['locator'] = skva_) && (skva_['lineNumber'] = 0x0);
  }, 'comment': function (iqlmo) {
    iqlmo = uef3pu4['apply'](this, arguments);var dz52t = this['doc']['createComment'](iqlmo);this['locator'] && up4u3(this['locator'], dz52t), usna(this, dz52t);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (u43jp, va6n_k, a6_v) {
    var nv_6ak = this['doc']['implementation'];if (nv_6ak && nv_6ak['createDocumentType']) {
      var qil = nv_6ak['createDocumentType'](u43jp, va6n_k, a6_v);this['locator'] && up4u3(this['locator'], qil), usna(this, qil);
    }
  }, 'warning': function (_nv$k) {
    console['warn']('[xmldom warning]\t' + _nv$k, uioqmx(this['locator']));
  }, 'error': function (wzg7d) {
    console['error']('[xmldom error]\t' + wzg7d, uioqmx(this['locator']));
  }, 'fatalError': function (n$fues) {
    throw console['error']('[xmldom fatalError]\t' + n$fues, uioqmx(this['locator'])), n$fues;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (mojqh) {
  uav6n_['prototype'][mojqh] = function () {
    return null;
  };
});var uhmlq = require('./uu12uu')['XMLReader'],
    uh4fj3 = exports['DOMImplementation'] = require('./uuDOuu')['DOMImplementation'];exports['XMLSerializer'] = require('./uuDOuu')['XMLSerializer'], exports['DOMParser'] = ulq7x;