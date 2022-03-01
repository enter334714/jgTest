var s = wx.$W;
function wsl$ntq(b3wou5) {
  this['options'] = b3wou5 || { 'locator': {} };
}function wjc8k7(y_90p, ny9p, ni0y9) {
  function py9(_y0r9) {
    var _7ryj = y_90p[_y0r9];!_7ryj && _py90 && (_7ryj = 0x2 == y_90p['length'] ? function (j_97ry) {
      y_90p(_y0r9, j_97ry);
    } : y_90p), do65hv[_y0r9] = _7ryj && function (f$t2q) {
      _7ryj('[xmldom ' + _y0r9 + ']\t' + f$t2q + wli90p(ni0y9));
    } || function () {};
  }if (!y_90p) {
    if (ny9p instanceof wiyn09p) return ny9p;y_90p = ny9p;
  }var do65hv = {},
      _py90 = y_90p instanceof Function;return ni0y9 = ni0y9 || {}, py9('warning'), py9('error'), py9('fatalError'), do65hv;
}function wiyn09p() {
  this['cdata'] = !0x1;
}function wd4hvo(u5dwb, pl0i$n) {
  pl0i$n['lineNumber'] = u5dwb['lineNumber'], pl0i$n['columnNumber'] = u5dwb['columnNumber'];
}function wli90p(yr7ja_) {
  return yr7ja_ ? '\x0a@' + (yr7ja_['systemId'] || '') + '#[line:' + yr7ja_['lineNumber'] + ',col:' + yr7ja_['columnNumber'] + ']' : void 0x0;
}function wjcar7(b5wo6, nqlst$, f$tsq2) {
  return 'string' == typeof b5wo6 ? b5wo6['substr'](nqlst$, f$tsq2) : b5wo6['length'] >= nqlst$ + f$tsq2 || nqlst$ ? new java['lang']['String'](b5wo6, nqlst$, f$tsq2) + '' : b5wo6;
}function wv5oh(rp09_y, ue8z3) {
  rp09_y['currentElement'] ? rp09_y['currentElement']['appendChild'](ue8z3) : rp09_y['doc']['appendChild'](ue8z3);
}wsl$ntq['prototype']['parseFromString'] = function (zc1e8, r_j97) {
  var ube13 = this['options'],
      ckaj = new wu5bdwo(),
      mxh64v = ube13['domBuilder'] || new wiyn09p(),
      kaj8c = ube13['errorHandler'],
      p9yn0i = ube13['locator'],
      r_y9p0 = ube13['xmlns'] || {},
      nl$ti0 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return p9yn0i && mxh64v['setDocumentLocator'](p9yn0i), ckaj['errorHandler'] = wjc8k7(kaj8c, mxh64v, p9yn0i), ckaj['domBuilder'] = ube13['domBuilder'] || mxh64v, /\/x?html?$/['test'](r_j97) && (nl$ti0['nbsp'] = '\u00a0', nl$ti0['copy'] = '©', r_y9p0[''] = 'http://www.w3.org/1999/xhtml'), r_y9p0['xml'] = r_y9p0['xml'] || 'http://www.w3.org/XML/1998/namespace', zc1e8 ? ckaj['parse'](zc1e8, r_y9p0, nl$ti0) : ckaj['errorHandler']['error']('invalid doc source'), mxh64v['doc'];
}, wiyn09p['prototype'] = { 'startDocument': function () {
    this['doc'] = new wvdh56()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ftqsl, ypr09_, owv, y_ja) {
    var stf$l = this['doc'],
        ca1ke = stf$l['createElementNS'](ftqsl, owv || ypr09_),
        z53bwu = y_ja['length'];wv5oh(this, ca1ke), this['currentElement'] = ca1ke, this['locator'] && wd4hvo(this['locator'], ca1ke);for (var it$0 = 0x0; z53bwu > it$0; it$0++) {
      var ftqsl = y_ja['getURI'](it$0),
          $0i = y_ja['getValue'](it$0),
          owv = y_ja['getQName'](it$0),
          jy9r7_ = stf$l['createAttributeNS'](ftqsl, owv);this['locator'] && wd4hvo(y_ja['getLocator'](it$0), jy9r7_), jy9r7_['value'] = jy9r7_['nodeValue'] = $0i, ca1ke['setAttributeNode'](jy9r7_);
    }
  }, 'endElement': function () {
    {
      var xdh64v = this['currentElement'];xdh64v['tagName'];
    }this['currentElement'] = xdh64v['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ce83z, iy0p9n) {
    var rakj = this['doc']['createProcessingInstruction'](ce83z, iy0p9n);this['locator'] && wd4hvo(this['locator'], rakj), wv5oh(this, rakj);
  }, 'ignorableWhitespace': function () {}, 'characters': function (y9pi0) {
    if (y9pi0 = wjcar7['apply'](this, arguments)) {
      if (this['cdata']) var gv4xmh = this['doc']['createCDATASection'](y9pi0);else var gv4xmh = this['doc']['createTextNode'](y9pi0);this['currentElement'] ? this['currentElement']['appendChild'](gv4xmh) : /^\s*$/['test'](y9pi0) && this['doc']['appendChild'](gv4xmh), this['locator'] && wd4hvo(this['locator'], gv4xmh);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (x6h4v) {
    (this['locator'] = x6h4v) && (x6h4v['lineNumber'] = 0x0);
  }, 'comment': function (e1c8z) {
    e1c8z = wjcar7['apply'](this, arguments);var $lnsqt = this['doc']['createComment'](e1c8z);this['locator'] && wd4hvo(this['locator'], $lnsqt), wv5oh(this, $lnsqt);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (s$t2f, tl$, h46vmx) {
    var gvx4 = this['doc']['implementation'];if (gvx4 && gvx4['createDocumentType']) {
      var d6oh4 = gvx4['createDocumentType'](s$t2f, tl$, h46vmx);this['locator'] && wd4hvo(this['locator'], d6oh4), wv5oh(this, d6oh4);
    }
  }, 'warning': function (tsql$n) {
    console['warn']('[xmldom warning]\t' + tsql$n, wli90p(this['locator']));
  }, 'error': function (isln) {
    console['error']('[xmldom error]\t' + isln, wli90p(this['locator']));
  }, 'fatalError': function (t$l0n) {
    throw console['error']('[xmldom fatalError]\t' + t$l0n, wli90p(this['locator'])), t$l0n;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (py_r90) {
  wiyn09p['prototype'][py_r90] = function () {
    return null;
  };
});var wu5bdwo = require('./wwqww')['XMLReader'],
    wvdh56 = exports['DOMImplementation'] = require('./wwDOww')['DOMImplementation'];exports['XMLSerializer'] = require('./wwDOww')['XMLSerializer'], exports['DOMParser'] = wsl$ntq;