var W = wx.$l;
function L9jzqhlk(klhqjz) {
  this['options'] = klhqjz || { 'locator': {} };
}function L9im30rc(sx8_4n, tf9o5, r3c0mi) {
  function j2akbh($s4d2) {
    var j2bk = sx8_4n[$s4d2];!j2bk && n$ && (j2bk = 0x2 == sx8_4n['length'] ? function (kba2) {
      sx8_4n($s4d2, kba2);
    } : sx8_4n), o7v19[$s4d2] = j2bk && function (q5htzl) {
      j2bk('[xmldom ' + $s4d2 + ']\t' + q5htzl + L9nr0xy3(r3c0mi));
    } || function () {};
  }if (!sx8_4n) {
    if (tf9o5 instanceof L9$kab) return tf9o5;sx8_4n = tf9o5;
  }var o7v19 = {},
      n$ = sx8_4n instanceof Function;return r3c0mi = r3c0mi || {}, j2akbh('warning'), j2akbh('error'), j2akbh('fatalError'), o7v19;
}function L9$kab() {
  this['cdata'] = !0x1;
}function L9f5t79o(x3ry0n, _nx8s) {
  _nx8s['lineNumber'] = x3ry0n['lineNumber'], _nx8s['columnNumber'] = x3ry0n['columnNumber'];
}function L9nr0xy3(r30cyx) {
  return r30cyx ? '\x0a@' + (r30cyx['systemId'] || '') + '#[line:' + r30cyx['lineNumber'] + ',col:' + r30cyx['columnNumber'] + ']' : void 0x0;
}function L9sadb2$(bkda2, f57t9o, c0yrm3) {
  return 'string' == typeof bkda2 ? bkda2['substr'](f57t9o, c0yrm3) : bkda2['length'] >= f57t9o + c0yrm3 || f57t9o ? new java['lang']['String'](bkda2, f57t9o, c0yrm3) + '' : bkda2;
}function L9ba$2d(s8$n, $dsb8) {
  s8$n['currentElement'] ? s8$n['currentElement']['appendChild']($dsb8) : s8$n['doc']['appendChild']($dsb8);
}L9jzqhlk['prototype']['parseFromString'] = function (thzqj, ry3c0x) {
  var adb2s = this['options'],
      _4d8$s = new L9mr3wc(),
      hazb = adb2s['domBuilder'] || new L9$kab(),
      k$a = adb2s['errorHandler'],
      n_x03 = adb2s['locator'],
      gove17 = adb2s['xmlns'] || {},
      ev6u1 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return n_x03 && hazb['setDocumentLocator'](n_x03), _4d8$s['errorHandler'] = L9im30rc(k$a, hazb, n_x03), _4d8$s['domBuilder'] = adb2s['domBuilder'] || hazb, /\/x?html?$/['test'](ry3c0x) && (ev6u1['nbsp'] = '\u00a0', ev6u1['copy'] = '©', gove17[''] = 'http://www.w3.org/1999/xhtml'), gove17['xml'] = gove17['xml'] || 'http://www.w3.org/XML/1998/namespace', thzqj ? _4d8$s['parse'](thzqj, gove17, ev6u1) : _4d8$s['errorHandler']['error']('invalid doc source'), hazb['doc'];
}, L9$kab['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9x3_0yn()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (o97tf, _y3x0, sdb2$8, uev17g) {
    var s8$2 = this['doc'],
        ycr3m = s8$2['createElementNS'](o97tf, sdb2$8 || _y3x0),
        hbj2 = uev17g['length'];L9ba$2d(this, ycr3m), this['currentElement'] = ycr3m, this['locator'] && L9f5t79o(this['locator'], ycr3m);for (var e1v9o = 0x0; hbj2 > e1v9o; e1v9o++) {
      var o97tf = uev17g['getURI'](e1v9o),
          g7uev = uev17g['getValue'](e1v9o),
          sdb2$8 = uev17g['getQName'](e1v9o),
          m3c = s8$2['createAttributeNS'](o97tf, sdb2$8);this['locator'] && L9f5t79o(uev17g['getLocator'](e1v9o), m3c), m3c['value'] = m3c['nodeValue'] = g7uev, ycr3m['setAttributeNode'](m3c);
    }
  }, 'endElement': function () {
    {
      var v9e71 = this['currentElement'];v9e71['tagName'];
    }this['currentElement'] = v9e71['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (d$b2ak, yr3m) {
    var zqhjk = this['doc']['createProcessingInstruction'](d$b2ak, yr3m);this['locator'] && L9f5t79o(this['locator'], zqhjk), L9ba$2d(this, zqhjk);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_3n) {
    if (_3n = L9sadb2$['apply'](this, arguments)) {
      if (this['cdata']) var zfq5t = this['doc']['createCDATASection'](_3n);else var zfq5t = this['doc']['createTextNode'](_3n);this['currentElement'] ? this['currentElement']['appendChild'](zfq5t) : /^\s*$/['test'](_3n) && this['doc']['appendChild'](zfq5t), this['locator'] && L9f5t79o(this['locator'], zfq5t);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (of7t95) {
    (this['locator'] = of7t95) && (of7t95['lineNumber'] = 0x0);
  }, 'comment': function ($sdba) {
    $sdba = L9sadb2$['apply'](this, arguments);var _d8s$4 = this['doc']['createComment']($sdba);this['locator'] && L9f5t79o(this['locator'], _d8s$4), L9ba$2d(this, _d8s$4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (pgue6, $s_4d, bd82$) {
    var n$8s_4 = this['doc']['implementation'];if (n$8s_4 && n$8s_4['createDocumentType']) {
      var t5of97 = n$8s_4['createDocumentType'](pgue6, $s_4d, bd82$);this['locator'] && L9f5t79o(this['locator'], t5of97), L9ba$2d(this, t5of97);
    }
  }, 'warning': function (e91v7) {
    console['warn']('[xmldom warning]\t' + e91v7, L9nr0xy3(this['locator']));
  }, 'error': function (v179o) {
    console['error']('[xmldom error]\t' + v179o, L9nr0xy3(this['locator']));
  }, 'fatalError': function (tq9fl5) {
    throw console['error']('[xmldom fatalError]\t' + tq9fl5, L9nr0xy3(this['locator'])), tq9fl5;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_$4n8) {
  L9$kab['prototype'][_$4n8] = function () {
    return null;
  };
});var L9mr3wc = require('./lllSAX')['XMLReader'],
    L9x3_0yn = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9jzqhlk;