var W = wx.$l;
function L9_x40n(rxc03y) {
  this['options'] = rxc03y || { 'locator': {} };
}function L9f97t5o(ds$248, n84yx_, mw3ri) {
  function guve7(o5t97f) {
    var d$28bs = ds$248[o5t97f];!d$28bs && v1f9o && (d$28bs = 0x2 == ds$248['length'] ? function (ajb2) {
      ds$248(o5t97f, ajb2);
    } : ds$248), o7t9f[o5t97f] = d$28bs && function (pu61ge) {
      d$28bs('[xmldom ' + o5t97f + ']\t' + pu61ge + L9s2da$b(mw3ri));
    } || function () {};
  }if (!ds$248) {
    if (n84yx_ instanceof L9$sd_48) return n84yx_;ds$248 = n84yx_;
  }var o7t9f = {},
      v1f9o = ds$248 instanceof Function;return mw3ri = mw3ri || {}, guve7('warning'), guve7('error'), guve7('fatalError'), o7t9f;
}function L9$sd_48() {
  this['cdata'] = !0x1;
}function L9y4n_0(ds4_8$, egv) {
  egv['lineNumber'] = ds4_8$['lineNumber'], egv['columnNumber'] = ds4_8$['columnNumber'];
}function L9s2da$b(xy4n0_) {
  return xy4n0_ ? '\x0a@' + (xy4n0_['systemId'] || '') + '#[line:' + xy4n0_['lineNumber'] + ',col:' + xy4n0_['columnNumber'] + ']' : void 0x0;
}function L9m3crw(akzhqj, z5lqf, $d428) {
  return 'string' == typeof akzhqj ? akzhqj['substr'](z5lqf, $d428) : akzhqj['length'] >= z5lqf + $d428 || z5lqf ? new java['lang']['String'](akzhqj, z5lqf, $d428) + '' : akzhqj;
}function L9jhka2b(jzbkh, d2ka$b) {
  jzbkh['currentElement'] ? jzbkh['currentElement']['appendChild'](d2ka$b) : jzbkh['doc']['appendChild'](d2ka$b);
}L9_x40n['prototype']['parseFromString'] = function (zqak, egp) {
  var r3i0mc = this['options'],
      g71evo = new L9uge1v7(),
      y3cm0 = r3i0mc['domBuilder'] || new L9$sd_48(),
      x30_y = r3i0mc['errorHandler'],
      a$2dkb = r3i0mc['locator'],
      of71v9 = r3i0mc['xmlns'] || {},
      $_4n8 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return a$2dkb && y3cm0['setDocumentLocator'](a$2dkb), g71evo['errorHandler'] = L9f97t5o(x30_y, y3cm0, a$2dkb), g71evo['domBuilder'] = r3i0mc['domBuilder'] || y3cm0, /\/x?html?$/['test'](egp) && ($_4n8['nbsp'] = '\u00a0', $_4n8['copy'] = '©', of71v9[''] = 'http://www.w3.org/1999/xhtml'), of71v9['xml'] = of71v9['xml'] || 'http://www.w3.org/XML/1998/namespace', zqak ? g71evo['parse'](zqak, of71v9, $_4n8) : g71evo['errorHandler']['error']('invalid doc source'), y3cm0['doc'];
}, L9$sd_48['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9lt59f()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (s$_d4, qlz5th, r3ny, jkazh) {
    var eu6g = this['doc'],
        cw3im = eu6g['createElementNS'](s$_d4, r3ny || qlz5th),
        sa$2db = jkazh['length'];L9jhka2b(this, cw3im), this['currentElement'] = cw3im, this['locator'] && L9y4n_0(this['locator'], cw3im);for (var v16eug = 0x0; sa$2db > v16eug; v16eug++) {
      var s$_d4 = jkazh['getURI'](v16eug),
          v9e17o = jkazh['getValue'](v16eug),
          r3ny = jkazh['getQName'](v16eug),
          ltqh = eu6g['createAttributeNS'](s$_d4, r3ny);this['locator'] && L9y4n_0(jkazh['getLocator'](v16eug), ltqh), ltqh['value'] = ltqh['nodeValue'] = v9e17o, cw3im['setAttributeNode'](ltqh);
    }
  }, 'endElement': function () {
    {
      var yx0n = this['currentElement'];yx0n['tagName'];
    }this['currentElement'] = yx0n['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (zlqjth, $_4) {
    var g61peu = this['doc']['createProcessingInstruction'](zlqjth, $_4);this['locator'] && L9y4n_0(this['locator'], g61peu), L9jhka2b(this, g61peu);
  }, 'ignorableWhitespace': function () {}, 'characters': function (tfzq) {
    if (tfzq = L9m3crw['apply'](this, arguments)) {
      if (this['cdata']) var r3xy = this['doc']['createCDATASection'](tfzq);else var r3xy = this['doc']['createTextNode'](tfzq);this['currentElement'] ? this['currentElement']['appendChild'](r3xy) : /^\s*$/['test'](tfzq) && this['doc']['appendChild'](r3xy), this['locator'] && L9y4n_0(this['locator'], r3xy);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (gu1e7v) {
    (this['locator'] = gu1e7v) && (gu1e7v['lineNumber'] = 0x0);
  }, 'comment': function (hjqkaz) {
    hjqkaz = L9m3crw['apply'](this, arguments);var q5tz = this['doc']['createComment'](hjqkaz);this['locator'] && L9y4n_0(this['locator'], q5tz), L9jhka2b(this, q5tz);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (k2abd, $kadb2, hazb) {
    var nx4_ = this['doc']['implementation'];if (nx4_ && nx4_['createDocumentType']) {
      var v1g7eo = nx4_['createDocumentType'](k2abd, $kadb2, hazb);this['locator'] && L9y4n_0(this['locator'], v1g7eo), L9jhka2b(this, v1g7eo);
    }
  }, 'warning': function (n$8_s4) {
    console['warn']('[xmldom warning]\t' + n$8_s4, L9s2da$b(this['locator']));
  }, 'error': function (v1fo97) {
    console['error']('[xmldom error]\t' + v1fo97, L9s2da$b(this['locator']));
  }, 'fatalError': function (y0c3m) {
    throw console['error']('[xmldom fatalError]\t' + y0c3m, L9s2da$b(this['locator'])), y0c3m;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ab2khj) {
  L9$sd_48['prototype'][ab2khj] = function () {
    return null;
  };
});var L9uge1v7 = require('./lllSAX')['XMLReader'],
    L9lt59f = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9_x40n;