var s = wx.$W;
function wbwd6o5(c18) {
  this['options'] = c18 || { 'locator': {} };
}function wn0it$(ac8kj, $f2tqs, v4m) {
  function ls$n($slqt) {
    var a7y_rj = ac8kj[$slqt];!a7y_rj && stq$nl && (a7y_rj = 0x2 == ac8kj['length'] ? function (m6vx4h) {
      ac8kj($slqt, m6vx4h);
    } : ac8kj), x46vhd[$slqt] = a7y_rj ? function (ae1k) {
      a7y_rj('[xmldom ' + $slqt + ']\t' + ae1k + wbwdou5(v4m));
    } : function () {};
  }if (!ac8kj) {
    if ($f2tqs instanceof wnp0l) return $f2tqs;ac8kj = $f2tqs;
  }var x46vhd = {},
      stq$nl = ac8kj instanceof Function;return v4m = v4m || {}, ls$n('warning'), ls$n('error'), ls$n('fatalError'), x46vhd;
}function wnp0l() {
  this['cdata'] = !0x1;
}function wy9_rj7(i$t0n, t2fsq$) {
  t2fsq$['lineNumber'] = i$t0n['lineNumber'], t2fsq$['columnNumber'] = i$t0n['columnNumber'];
}function wbwdou5(_ja) {
  return _ja ? '\x0a@' + (_ja['systemId'] || '') + '#[line:' + _ja['lineNumber'] + ',col:' + _ja['columnNumber'] + ']' : void 0x0;
}function wec18zk(vxg, eac8k, hmx4vg) {
  return 'string' == typeof vxg ? vxg['substr'](eac8k, hmx4vg) : vxg['length'] >= eac8k + hmx4vg || eac8k ? new java['lang']['String'](vxg, eac8k, hmx4vg) + '' : vxg;
}function wowu5(w5dbu, c8k1ez) {
  (w5dbu['currentElement'] || w5dbu['doc'])['appendChild'](c8k1ez);
}wbwd6o5['prototype']['parseFromString'] = function (e1ub3z, wu53bo) {
  var ake18c = this['options'],
      stq$2f = new wou53bw(),
      lt$qs = ake18c['domBuilder'] || new wnp0l(),
      _yj7ar = ake18c['errorHandler'],
      lip9n0 = ake18c['locator'],
      cz1k = ake18c['xmlns'] || {},
      b1u3zw = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return lip9n0 && lt$qs['setDocumentLocator'](lip9n0), stq$2f['errorHandler'] = wn0it$(_yj7ar, lt$qs, lip9n0), stq$2f['domBuilder'] = ake18c['domBuilder'] || lt$qs, /\/x?html?$/['test'](wu53bo) && (b1u3zw['nbsp'] = '\u00a0', b1u3zw['copy'] = '©', cz1k[''] = 'http://www.w3.org/1999/xhtml'), cz1k['xml'] = cz1k['xml'] || 'http://www.w3.org/XML/1998/namespace', e1ub3z ? stq$2f['parse'](e1ub3z, cz1k, b1u3zw) : stq$2f['errorHandler']['error']('invalid doc source'), lt$qs['doc'];
}, wnp0l['prototype'] = { 'startDocument': function () {
    this['doc'] = new wtn0i$l()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (r9p0y, a1k8, x6hdv4, ryp9j) {
    var _yi0 = this['doc'],
        y_j9p = _yi0['createElementNS'](r9p0y, x6hdv4 || a1k8),
        q$ts = ryp9j['length'];wowu5(this, y_j9p), this['currentElement'] = y_j9p, this['locator'] && wy9_rj7(this['locator'], y_j9p);for (var xg4vh = 0x0; xg4vh < q$ts; xg4vh++) {
      var r9p0y = ryp9j['getURI'](xg4vh),
          vhd4o6 = ryp9j['getValue'](xg4vh),
          x6hdv4 = ryp9j['getQName'](xg4vh),
          i0np = _yi0['createAttributeNS'](r9p0y, x6hdv4);this['locator'] && wy9_rj7(ryp9j['getLocator'](xg4vh), i0np), i0np['value'] = i0np['nodeValue'] = vhd4o6, y_j9p['setAttributeNode'](i0np);
    }
  }, 'endElement': function () {
    var uzw1b3 = this['currentElement'];uzw1b3['tagName'], this['currentElement'] = uzw1b3['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (i09yp, u5bzw) {
    u5bzw = this['doc']['createProcessingInstruction'](i09yp, u5bzw), (this['locator'] && wy9_rj7(this['locator'], u5bzw), wowu5(this, u5bzw));
  }, 'ignorableWhitespace': function () {}, 'characters': function (dwb56) {
    var c1z8;(dwb56 = wec18zk['apply'](this, arguments)) && (c1z8 = this['cdata'] ? this['doc']['createCDATASection'](dwb56) : this['doc']['createTextNode'](dwb56), this['currentElement'] ? this['currentElement']['appendChild'](c1z8) : /^\s*$/['test'](dwb56) && this['doc']['appendChild'](c1z8), this['locator'] && wy9_rj7(this['locator'], c1z8));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (k87caj) {
    (this['locator'] = k87caj) && (k87caj['lineNumber'] = 0x0);
  }, 'comment': function (ekc8a) {
    ekc8a = wec18zk['apply'](this, arguments);var ca8j = this['doc']['createComment'](ekc8a);this['locator'] && wy9_rj7(this['locator'], ca8j), wowu5(this, ca8j);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (mxgv4, yp9_i, lnt0i) {
    var ckj7ar = this['doc']['implementation'];ckj7ar && ckj7ar['createDocumentType'] && (lnt0i = ckj7ar['createDocumentType'](mxgv4, yp9_i, lnt0i), this['locator'] && wy9_rj7(this['locator'], lnt0i), wowu5(this, lnt0i));
  }, 'warning': function (_py9) {
    console['warn']('[xmldom warning]\t' + _py9, wbwdou5(this['locator']));
  }, 'error': function (p$l0in) {
    console['error']('[xmldom error]\t' + p$l0in, wbwdou5(this['locator']));
  }, 'fatalError': function (j7yr_9) {
    throw console['error']('[xmldom fatalError]\t' + j7yr_9, wbwdou5(this['locator'])), j7yr_9;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (in09lp) {
  wnp0l['prototype'][in09lp] = function () {
    return null;
  };
});var wou53bw = require('./wwqww')['XMLReader'],
    wtn0i$l = exports['DOMImplementation'] = require('./wwDOww')['DOMImplementation'];exports['XMLSerializer'] = require('./wwDOww')['XMLSerializer'], exports['DOMParser'] = wbwd6o5;