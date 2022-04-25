var Q = wx.$v;
function vz6ulh(ul8qbe) {
  this['options'] = ul8qbe || { 'locator': {} };
}function vz86lub(v70kp, _h6y, xwvqp) {
  function _z61yh(l8z6u) {
    var xwpgv5 = v70kp[l8z6u];!xwpgv5 && pv57xg && (xwpgv5 = 0x2 == v70kp['length'] ? function (h_1ty) {
      v70kp(l8z6u, h_1ty);
    } : v70kp), risf9$[l8z6u] = xwpgv5 && function (nt2h1) {
      xwpgv5('[xmldom ' + l8z6u + ']\t' + nt2h1 + vk5mc70(xwvqp));
    } || function () {};
  }if (!v70kp) {
    if (_h6y instanceof vyht1) return _h6y;v70kp = _h6y;
  }var risf9$ = {},
      pv57xg = v70kp instanceof Function;return xwvqp = xwvqp || {}, _z61yh('warning'), _z61yh('error'), _z61yh('fatalError'), risf9$;
}function vyht1() {
  this['cdata'] = !0x1;
}function vg5xvpw(y6zh1, mk50c) {
  mk50c['lineNumber'] = y6zh1['lineNumber'], mk50c['columnNumber'] = y6zh1['columnNumber'];
}function vk5mc70(uze8lb) {
  return uze8lb ? '\x0a@' + (uze8lb['systemId'] || '') + '#[line:' + uze8lb['lineNumber'] + ',col:' + uze8lb['columnNumber'] + ']' : void 0x0;
}function vkv7(cvk057, gqxewp, $i3so4) {
  return 'string' == typeof cvk057 ? cvk057['substr'](gqxewp, $i3so4) : cvk057['length'] >= gqxewp + $i3so4 || gqxewp ? new java['lang']['String'](cvk057, gqxewp, $i3so4) + '' : cvk057;
}function vpxwvqg(z16hl, fo$9s) {
  z16hl['currentElement'] ? z16hl['currentElement']['appendChild'](fo$9s) : z16hl['doc']['appendChild'](fo$9s);
}vz6ulh['prototype']['parseFromString'] = function (_324n, xbgq) {
  var exwg = this['options'],
      nt3_ = new vth2_1y(),
      s34on$ = exwg['domBuilder'] || new vyht1(),
      pxv5k7 = exwg['errorHandler'],
      m0cjk = exwg['locator'],
      bqg8ew = exwg['xmlns'] || {},
      hy2 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return m0cjk && s34on$['setDocumentLocator'](m0cjk), nt3_['errorHandler'] = vz86lub(pxv5k7, s34on$, m0cjk), nt3_['domBuilder'] = exwg['domBuilder'] || s34on$, /\/x?html?$/['test'](xbgq) && (hy2['nbsp'] = '\u00a0', hy2['copy'] = '©', bqg8ew[''] = 'http://www.w3.org/1999/xhtml'), bqg8ew['xml'] = bqg8ew['xml'] || 'http://www.w3.org/XML/1998/namespace', _324n ? nt3_['parse'](_324n, bqg8ew, hy2) : nt3_['errorHandler']['error']('invalid doc source'), s34on$['doc'];
}, vyht1['prototype'] = { 'startDocument': function () {
    this['doc'] = new v$i9sr()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (jdmca0, rsi9f$, u8webq, hz61ly) {
    var camd0j = this['doc'],
        c0madj = camd0j['createElementNS'](jdmca0, u8webq || rsi9f$),
        z8bu6l = hz61ly['length'];vpxwvqg(this, c0madj), this['currentElement'] = c0madj, this['locator'] && vg5xvpw(this['locator'], c0madj);for (var n32o4t = 0x0; z8bu6l > n32o4t; n32o4t++) {
      var jdmca0 = hz61ly['getURI'](n32o4t),
          uzl8y = hz61ly['getValue'](n32o4t),
          u8webq = hz61ly['getQName'](n32o4t),
          jmca = camd0j['createAttributeNS'](jdmca0, u8webq);this['locator'] && vg5xvpw(hz61ly['getLocator'](n32o4t), jmca), jmca['value'] = jmca['nodeValue'] = uzl8y, c0madj['setAttributeNode'](jmca);
    }
  }, 'endElement': function () {
    {
      var o9$sfi = this['currentElement'];o9$sfi['tagName'];
    }this['currentElement'] = o9$sfi['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (xqegpw, wqu8e) {
    var qwvxg = this['doc']['createProcessingInstruction'](xqegpw, wqu8e);this['locator'] && vg5xvpw(this['locator'], qwvxg), vpxwvqg(this, qwvxg);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_1nth2) {
    if (_1nth2 = vkv7['apply'](this, arguments)) {
      if (this['cdata']) var bel8qu = this['doc']['createCDATASection'](_1nth2);else var bel8qu = this['doc']['createTextNode'](_1nth2);this['currentElement'] ? this['currentElement']['appendChild'](bel8qu) : /^\s*$/['test'](_1nth2) && this['doc']['appendChild'](bel8qu), this['locator'] && vg5xvpw(this['locator'], bel8qu);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (bl8z6u) {
    (this['locator'] = bl8z6u) && (bl8z6u['lineNumber'] = 0x0);
  }, 'comment': function (lu8z) {
    lu8z = vkv7['apply'](this, arguments);var k5c0v7 = this['doc']['createComment'](lu8z);this['locator'] && vg5xvpw(this['locator'], k5c0v7), vpxwvqg(this, k5c0v7);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (xqwgeb, fs9r, s4o3i$) {
    var xbwqg = this['doc']['implementation'];if (xbwqg && xbwqg['createDocumentType']) {
      var zy_ = xbwqg['createDocumentType'](xqwgeb, fs9r, s4o3i$);this['locator'] && vg5xvpw(this['locator'], zy_), vpxwvqg(this, zy_);
    }
  }, 'warning': function (cjdam0) {
    console['warn']('[xmldom warning]\t' + cjdam0, vk5mc70(this['locator']));
  }, 'error': function (s$o) {
    console['error']('[xmldom error]\t' + s$o, vk5mc70(this['locator']));
  }, 'fatalError': function ($os3i4) {
    throw console['error']('[xmldom fatalError]\t' + $os3i4, vk5mc70(this['locator'])), $os3i4;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (nt4o3) {
  vyht1['prototype'][nt4o3] = function () {
    return null;
  };
});var vth2_1y = require('./vv12vv')['XMLReader'],
    v$i9sr = exports['DOMImplementation'] = require('./vvDOvv')['DOMImplementation'];exports['XMLSerializer'] = require('./vvDOvv')['XMLSerializer'], exports['DOMParser'] = vz6ulh;