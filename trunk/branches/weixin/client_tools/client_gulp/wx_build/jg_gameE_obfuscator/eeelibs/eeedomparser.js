var b = wx.$e;
function eb065d8(ksb690) {
  this['options'] = ksb690 || { 'locator': {} };
}function enjusq3(qns93, i3nju, lfhzry) {
  function lthzrg(knuq) {
    var am_ = qns93[knuq];!am_ && _vzfy && (am_ = 0x2 == qns93['length'] ? function (d5b0w8) {
      qns93(knuq, d5b0w8);
    } : qns93), yfv_74[knuq] = am_ && function (eoca) {
      am_('[xmldom ' + knuq + ']\t' + eoca + eo7mc(lfhzry));
    } || function () {};
  }if (!qns93) {
    if (i3nju instanceof ensuk96) return i3nju;qns93 = i3nju;
  }var yfv_74 = {},
      _vzfy = qns93 instanceof Function;return lfhzry = lfhzry || {}, lthzrg('warning'), lthzrg('error'), lthzrg('fatalError'), yfv_74;
}function ensuk96() {
  this['cdata'] = !0x1;
}function e_74y(gtrxhl, v_74y) {
  v_74y['lineNumber'] = gtrxhl['lineNumber'], v_74y['columnNumber'] = gtrxhl['columnNumber'];
}function eo7mc(a_m74) {
  return a_m74 ? '\x0a@' + (a_m74['systemId'] || '') + '#[line:' + a_m74['lineNumber'] + ',col:' + a_m74['columnNumber'] + ']' : void 0x0;
}function egtlz(_fv4z, db650, v7fa) {
  return 'string' == typeof _fv4z ? _fv4z['substr'](db650, v7fa) : _fv4z['length'] >= db650 + v7fa || db650 ? new java['lang']['String'](_fv4z, db650, v7fa) + '' : _fv4z;
}function egjx3$(ukbs96, rlzht) {
  ukbs96['currentElement'] ? ukbs96['currentElement']['appendChild'](rlzht) : ukbs96['doc']['appendChild'](rlzht);
}eb065d8['prototype']['parseFromString'] = function (un3qs9, zvy4r) {
  var w8b = this['options'],
      $qinj = new e$jin(),
      f47v_y = w8b['domBuilder'] || new ensuk96(),
      frvhyz = w8b['errorHandler'],
      fhrzl = w8b['locator'],
      yzrhfv = w8b['xmlns'] || {},
      yrhtzl = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return fhrzl && f47v_y['setDocumentLocator'](fhrzl), $qinj['errorHandler'] = enjusq3(frvhyz, f47v_y, fhrzl), $qinj['domBuilder'] = w8b['domBuilder'] || f47v_y, /\/x?html?$/['test'](zvy4r) && (yrhtzl['nbsp'] = '\u00a0', yrhtzl['copy'] = '©', yzrhfv[''] = 'http://www.w3.org/1999/xhtml'), yzrhfv['xml'] = yzrhfv['xml'] || 'http://www.w3.org/XML/1998/namespace', un3qs9 ? $qinj['parse'](un3qs9, yzrhfv, yrhtzl) : $qinj['errorHandler']['error']('invalid doc source'), f47v_y['doc'];
}, ensuk96['prototype'] = { 'startDocument': function () {
    this['doc'] = new edb058w()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (s906k, k065db, _z4fvy, zlthg) {
    var hgtlzr = this['doc'],
        hrzg = hgtlzr['createElementNS'](s906k, _z4fvy || k065db),
        d21w = zlthg['length'];egjx3$(this, hrzg), this['currentElement'] = hrzg, this['locator'] && e_74y(this['locator'], hrzg);for (var v7_yf4 = 0x0; d21w > v7_yf4; v7_yf4++) {
      var s906k = zlthg['getURI'](v7_yf4),
          fryhvz = zlthg['getValue'](v7_yf4),
          _z4fvy = zlthg['getQName'](v7_yf4),
          u9kn6s = hgtlzr['createAttributeNS'](s906k, _z4fvy);this['locator'] && e_74y(zlthg['getLocator'](v7_yf4), u9kn6s), u9kn6s['value'] = u9kn6s['nodeValue'] = fryhvz, hrzg['setAttributeNode'](u9kn6s);
    }
  }, 'endElement': function () {
    {
      var thgrxl = this['currentElement'];thgrxl['tagName'];
    }this['currentElement'] = thgrxl['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ryhfz, d0b8w5) {
    var q3$ix = this['doc']['createProcessingInstruction'](ryhfz, d0b8w5);this['locator'] && e_74y(this['locator'], q3$ix), egjx3$(this, q3$ix);
  }, 'ignorableWhitespace': function () {}, 'characters': function (rzfyvh) {
    if (rzfyvh = egtlz['apply'](this, arguments)) {
      if (this['cdata']) var $iglx = this['doc']['createCDATASection'](rzfyvh);else var $iglx = this['doc']['createTextNode'](rzfyvh);this['currentElement'] ? this['currentElement']['appendChild']($iglx) : /^\s*$/['test'](rzfyvh) && this['doc']['appendChild']($iglx), this['locator'] && e_74y(this['locator'], $iglx);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (_m4a7v) {
    (this['locator'] = _m4a7v) && (_m4a7v['lineNumber'] = 0x0);
  }, 'comment': function (d5208w) {
    d5208w = egtlz['apply'](this, arguments);var o7mac_ = this['doc']['createComment'](d5208w);this['locator'] && e_74y(this['locator'], o7mac_), egjx3$(this, o7mac_);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (m74a_, d852w, xhl$gt) {
    var _4zvf = this['doc']['implementation'];if (_4zvf && _4zvf['createDocumentType']) {
      var m47ca_ = _4zvf['createDocumentType'](m74a_, d852w, xhl$gt);this['locator'] && e_74y(this['locator'], m47ca_), egjx3$(this, m47ca_);
    }
  }, 'warning': function (jxt$g) {
    console['warn']('[xmldom warning]\t' + jxt$g, eo7mc(this['locator']));
  }, 'error': function (suqkn) {
    console['error']('[xmldom error]\t' + suqkn, eo7mc(this['locator']));
  }, 'fatalError': function (opamce) {
    throw console['error']('[xmldom fatalError]\t' + opamce, eo7mc(this['locator'])), opamce;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (d281) {
  ensuk96['prototype'][d281] = function () {
    return null;
  };
});var e$jin = require('./eeesax')['XMLReader'],
    edb058w = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = eb065d8;