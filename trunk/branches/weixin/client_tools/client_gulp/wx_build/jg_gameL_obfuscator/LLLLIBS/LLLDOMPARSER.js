var W = wx.$l;
function L9v71o9e(fo791) {
  this['options'] = fo791 || { 'locator': {} };
}function L9e1o79v(y4xn0, y3rx0n, _y8n4) {
  function ric03m(_d8$4s) {
    var o7t9 = y4xn0[_d8$4s];!o7t9 && qljh && (o7t9 = 0x2 == y4xn0['length'] ? function (_30xyn) {
      y4xn0(_d8$4s, _30xyn);
    } : y4xn0), akqhjz[_d8$4s] = o7t9 && function (f9t75o) {
      o7t9('[xmldom ' + _d8$4s + ']\t' + f9t75o + L9yxnr0(_y8n4));
    } || function () {};
  }if (!y4xn0) {
    if (y3rx0n instanceof L9jbha2k) return y3rx0n;y4xn0 = y3rx0n;
  }var akqhjz = {},
      qljh = y4xn0 instanceof Function;return _y8n4 = _y8n4 || {}, ric03m('warning'), ric03m('error'), ric03m('fatalError'), akqhjz;
}function L9jbha2k() {
  this['cdata'] = !0x1;
}function L9kahjqz(v75of, _8y) {
  _8y['lineNumber'] = v75of['lineNumber'], _8y['columnNumber'] = v75of['columnNumber'];
}function L9yxnr0(yx4_) {
  return yx4_ ? '\x0a@' + (yx4_['systemId'] || '') + '#[line:' + yx4_['lineNumber'] + ',col:' + yx4_['columnNumber'] + ']' : void 0x0;
}function L9_$48sd(u61epg, m0r3ic, lzjt) {
  return 'string' == typeof u61epg ? u61epg['substr'](m0r3ic, lzjt) : u61epg['length'] >= m0r3ic + lzjt || m0r3ic ? new java['lang']['String'](u61epg, m0r3ic, lzjt) + '' : u61epg;
}function L9imc03r($s248, bzja) {
  $s248['currentElement'] ? $s248['currentElement']['appendChild'](bzja) : $s248['doc']['appendChild'](bzja);
}L9v71o9e['prototype']['parseFromString'] = function (tqhl5, ftq5l9) {
  var ev79o = this['options'],
      cxry3 = new L9iw3mcr(),
      y03cm = ev79o['domBuilder'] || new L9jbha2k(),
      _y8xn = ev79o['errorHandler'],
      s24d8$ = ev79o['locator'],
      o91f = ev79o['xmlns'] || {},
      s2dab = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return s24d8$ && y03cm['setDocumentLocator'](s24d8$), cxry3['errorHandler'] = L9e1o79v(_y8xn, y03cm, s24d8$), cxry3['domBuilder'] = ev79o['domBuilder'] || y03cm, /\/x?html?$/['test'](ftq5l9) && (s2dab['nbsp'] = '\u00a0', s2dab['copy'] = '©', o91f[''] = 'http://www.w3.org/1999/xhtml'), o91f['xml'] = o91f['xml'] || 'http://www.w3.org/XML/1998/namespace', tqhl5 ? cxry3['parse'](tqhl5, o91f, s2dab) : cxry3['errorHandler']['error']('invalid doc source'), y03cm['doc'];
}, L9jbha2k['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9tqzljh()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (s_8$4, b$a2dk, tzf5ql, rcm03i) {
    var j2ahkb = this['doc'],
        x4n_s8 = j2ahkb['createElementNS'](s_8$4, tzf5ql || b$a2dk),
        ve17o = rcm03i['length'];L9imc03r(this, x4n_s8), this['currentElement'] = x4n_s8, this['locator'] && L9kahjqz(this['locator'], x4n_s8);for (var o5fv7 = 0x0; ve17o > o5fv7; o5fv7++) {
      var s_8$4 = rcm03i['getURI'](o5fv7),
          e16gv = rcm03i['getValue'](o5fv7),
          tzf5ql = rcm03i['getQName'](o5fv7),
          rmcw3 = j2ahkb['createAttributeNS'](s_8$4, tzf5ql);this['locator'] && L9kahjqz(rcm03i['getLocator'](o5fv7), rmcw3), rmcw3['value'] = rmcw3['nodeValue'] = e16gv, x4n_s8['setAttributeNode'](rmcw3);
    }
  }, 'endElement': function () {
    {
      var veu1g = this['currentElement'];veu1g['tagName'];
    }this['currentElement'] = veu1g['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (hzjkq, yxc3r0) {
    var d2bs = this['doc']['createProcessingInstruction'](hzjkq, yxc3r0);this['locator'] && L9kahjqz(this['locator'], d2bs), L9imc03r(this, d2bs);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ft5o) {
    if (ft5o = L9_$48sd['apply'](this, arguments)) {
      if (this['cdata']) var $248sd = this['doc']['createCDATASection'](ft5o);else var $248sd = this['doc']['createTextNode'](ft5o);this['currentElement'] ? this['currentElement']['appendChild']($248sd) : /^\s*$/['test'](ft5o) && this['doc']['appendChild']($248sd), this['locator'] && L9kahjqz(this['locator'], $248sd);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (q5zf) {
    (this['locator'] = q5zf) && (q5zf['lineNumber'] = 0x0);
  }, 'comment': function (r0ic3) {
    r0ic3 = L9_$48sd['apply'](this, arguments);var ove7g = this['doc']['createComment'](r0ic3);this['locator'] && L9kahjqz(this['locator'], ove7g), L9imc03r(this, ove7g);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (f57t9o, cy03rx, eg6v1u) {
    var bzkhj = this['doc']['implementation'];if (bzkhj && bzkhj['createDocumentType']) {
      var xy_n3 = bzkhj['createDocumentType'](f57t9o, cy03rx, eg6v1u);this['locator'] && L9kahjqz(this['locator'], xy_n3), L9imc03r(this, xy_n3);
    }
  }, 'warning': function (zkaq) {
    console['warn']('[xmldom warning]\t' + zkaq, L9yxnr0(this['locator']));
  }, 'error': function (q59lft) {
    console['error']('[xmldom error]\t' + q59lft, L9yxnr0(this['locator']));
  }, 'fatalError': function (u1e6) {
    throw console['error']('[xmldom fatalError]\t' + u1e6, L9yxnr0(this['locator'])), u1e6;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function ($sd8_4) {
  L9jbha2k['prototype'][$sd8_4] = function () {
    return null;
  };
});var L9iw3mcr = require('./lllSAX')['XMLReader'],
    L9tqzljh = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9v71o9e;